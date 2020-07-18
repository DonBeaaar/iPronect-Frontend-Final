import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent implements OnInit {

  @Input() idPublicacion: string;

  public comentarios: Comentario[];
  public comentarDisplay = false;
  public comentario: string;


  constructor(private comentarioService: ComentarioService, private uiService: UiServiceService ) {}

  cargarComentariosPublicacion(){
    this.comentarioService.getComentariosPublicacion(this.idPublicacion).subscribe((comentarios: Comentario[]) => {
      this.comentarios = comentarios;
    });
  }

  ngOnInit() {
    this.cargarComentariosPublicacion();
  }


  async comentar(comentarioForm: NgForm) {
    if (!comentarioForm.valid) {
      this.uiService.alertaInformativa('Favor ingresar un comentario');
      return;
    }
    const comentario: string = comentarioForm.value.comentario;
    this.comentarioService.createComentario(this.idPublicacion, comentario).subscribe(
      (respuestaComentario: string) => {
        comentarioForm.resetForm();
        this.ngOnInit();
        this.uiService.alertaExitosa('Comentario exitoso', respuestaComentario);
        this.comentarDisplay = false;
    });
  }


  agregarComentario(){
    this.comentarDisplay = true;
  }
  cerrarComentar(){
    this.comentarDisplay = false;
  }

}
