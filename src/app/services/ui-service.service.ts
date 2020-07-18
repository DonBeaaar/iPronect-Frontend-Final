import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(public alertCrl: AlertController) { }

  async alertaInformativa(message: string) {
    const alert = await this.alertCrl.create({
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertaExitosa(header: string, message: string) {
    const alert = await this.alertCrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
