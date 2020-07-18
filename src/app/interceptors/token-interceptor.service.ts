import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EmpresaService } from '../services/empresa.service';
import { UiServiceService } from '../services/ui-service.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  protected debug = true;

  constructor( private empresaService: EmpresaService, private uiService: UiServiceService, private storage: Storage,
               private alertController: AlertController) {}



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
                            const status =  error.status;
                            const reason = error && error.error.reason ? error.error.reason : '';

                            this.presentAlert(status, reason);
                            return throwError(error);
                        })
                    );
                })
            );


    /* const URL = environment.url;
    const headers  = new HttpHeaders({
      token: this.empresaService.token
    });

    const reqClone = req.clone({headers});

    if ((req.url === `${URL}/autenticacion`)) {
      return next.handle(req);
    }
    return next.handle(reqClone).pipe(
        catchError(err => this.manejarError(err))
    ); */
  }

  async presentAlert(status, reason) {
    const alert = await this.alertController.create({
        header: status + ' Error',
        subHeader: 'Subtitle',
        message: reason,
        buttons: ['OK']
    });

    await alert.present();
}

  /* manejarError(err: HttpErrorResponse) {
    if (err.error.message === 'Token no valido') {
      this.uiService.alertaInformativa('Token no valido');
    }
    // console.log('Interceptor', err.error.message);
    return throwError(err);
  } */

}
