import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ToastController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private empresaService: EmpresaService, private toastCtrl: ToastController, private navCtrl: NavController) {}

  datosEmpresa: Empresa;
  publicacionesEmpresa: Publicacion[];
  publicacionesEmpresaRAW: Publicacion[];

  cargarPublicacionesEmpresa(){
    this.empresaService.perfilEmpresa().subscribe((perfil: Perfil) => {
      this.datosEmpresa = perfil.empresa;
      this.publicacionesEmpresa = perfil.publicaciones;
      this.publicacionesEmpresaRAW = perfil.publicaciones;
    });
  }

  ngOnInit(){
    this.cargarPublicacionesEmpresa();
  }

  filtrarPublicaciones(estado: string){

    this.publicacionesEmpresa = this.publicacionesEmpresaRAW;
    if (estado === 'Todas') { return; }

    this.publicacionesEmpresa = this.publicacionesEmpresa.filter((publicacion: Publicacion) => {
      return publicacion.estadoPublicacion === estado;
    });

    if (this.publicacionesEmpresa.length <= 0) {
      this.presentToast('No tienes publicaciones en ese estado');
    }
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  verDetallePublicacion(publicacion: string){
    const navigationExtras: NavigationExtras = { queryParams: { publicacion, vendedor: false }};
    this.navCtrl.navigateForward(['detalle-publicacion'], navigationExtras);
  }

}
