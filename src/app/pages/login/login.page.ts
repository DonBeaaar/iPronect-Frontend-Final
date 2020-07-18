import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Empresa } from 'src/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  email = 'felipe@gmail.com';
  password = '1234';

  formularioRegistro: FormGroup;

  constructor(private empresaService: EmpresaService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  ngOnInit() {
    this.formularioRegistro = new FormGroup ({
      nombre: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      tipoEmpresa: new FormControl(null, [Validators.required]),
    });

  }

  async login(loginForm: NgForm){
    if (!loginForm.valid) { return; }

    const empresa = new Empresa(loginForm.value.email, loginForm.value.password);
    const valido = await this.empresaService.login(empresa);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1');
    }else{
      this.uiService.alertaInformativa('Usuario o contraseña no son correctos');
    }
  }

  registrarEmpresa() {
    if (!this.formularioRegistro.valid) { return; }
    const empresaRegistro = new Empresa(this.formularioRegistro.value.email,
                                        this.formularioRegistro.value.password,
                                        this.formularioRegistro.value.nombre,
                                        this.formularioRegistro.value.telefono,
                                        this.formularioRegistro.value.direccion,
                                        null,
                                        this.formularioRegistro.value.tipoEmpresa);

    this.empresaService.registroEmpresa(empresaRegistro).subscribe((resp) => {
      this.uiService.alertaInformativa('Empresa registrada correctamente, ya puedes ingresar al sistema! :)')
      this.navCtrl.navigateRoot('/main/tabs/tab1');
    }, (error) => {
      this.uiService.alertaInformativa('Nombre de usuario o correo ya registrados en el sistema');
    });
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
