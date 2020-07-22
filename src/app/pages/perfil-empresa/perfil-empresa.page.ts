import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.page.html',
  styleUrls: ['./perfil-empresa.page.scss'],
})
export class PerfilEmpresaPage implements OnInit {

  private idEmpresa: string;
  public datosEmpresa: Empresa;
  public publicacionesEmpresa: Publicacion[];

  @ViewChild('checkStar') private chceckStar;
  constructor(private route: ActivatedRoute, private empresaService: EmpresaService) { }


  cargarDatosEmpresa(){
    this.route.queryParams.subscribe(idEmpresa => { this.idEmpresa = idEmpresa.empresaID; });
    this.empresaService.perfilEmpresaID(this.idEmpresa).subscribe((perfilEmrpesa: Perfil) => {
      this.datosEmpresa = perfilEmrpesa.empresa;
      this.publicacionesEmpresa = perfilEmrpesa.publicaciones;
    });
  }

  ngOnInit() {
    this.cargarDatosEmpresa();
  }

  agregarFavorito() {
    console.log(this.chceckStar.nativeElement.checked);

  }

}
