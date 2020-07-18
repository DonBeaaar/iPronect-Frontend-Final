import { Injectable } from '@angular/core';
import { Empresa } from 'src/models/empresa.model';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenHeaderService {

  token: string = null;
  empresa: Empresa = null;

  constructor(private storage: Storage,
              private http: HttpClient) { }


  async guardarToken(token: string , empresa: Empresa) {
    this.token = token;
    this.empresa = empresa;
    await this.storage.set('token', token);
    await this.storage.set('empresa', empresa);
  }

  async validaToken(): Promise<boolean>{

    await this.cargarToken();
    if (!this.token) {
      console.log('El token no es valido');
      return Promise.resolve(false);
    }
    const headers = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'token' : this.token
    });
    return new Promise<boolean>(resolve => {
      this.http.get(`${URL}/empresa/token`, {headers}).subscribe(
        (resp: RespuestaToken) => {
          if (resp.ok) {
            this.empresa = resp.empresa;
            resolve(true);
          }else{
            console.log('El token no es valido');
            resolve(false);
          }
        });
    });

  }

   async cargarToken(){
      this.token = await this.storage.get('token') || null;
    }
}
