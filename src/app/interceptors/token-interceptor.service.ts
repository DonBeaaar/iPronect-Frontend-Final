import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EmpresaService } from '../services/empresa.service';
import { UiServiceService } from '../services/ui-service.service';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  protected debug = true;

  constructor(private empresaService: EmpresaService, private uiService: UiServiceService, private storage: Storage,
              private alertController: AlertController,
              private navigateCtrl: NavController) { }



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.storage.get(TOKEN_KEY))
      .pipe(
        switchMap(token => {
          if (token) {
            request = request.clone({ headers: request.headers.set('token', token) });
          }

          if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }

          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                // do nothing for now
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              const status = error.status;
              if (status === 401) {
                this.presentAlert('Su sesión a expirado', 'Favor ingrese sus credenciales nuevamente');
                this.navigateCtrl.navigateRoot('/login');
                return throwError(error);
              }
              this.presentAlert('Error', error.error.message);
              return throwError(error);
            })
          );
        })
      );
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
