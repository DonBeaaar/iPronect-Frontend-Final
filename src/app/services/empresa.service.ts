import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from 'src/models/empresa.model';
import { Storage } from '@ionic/storage';
import { TokenHeaderService } from './token-header.service';
import { map } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  constructor(private http: HttpClient,
              private storage: Storage,
              private tokenHeaderService: TokenHeaderService) { }

  token: string = null;
  empresa: Empresa = null;

  login( empresa: Empresa){

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.http.post(`${URL}/autenticacion`, empresa).subscribe((resp: RespuestaLogin) => {
        console.log(resp);
        this.guardarToken(resp.token, resp.empresa);
        // this.tokenHeaderService.guardarToken(resp.token, resp.empresa);
        resolve(true);
      },
      (error) => {
        this.token = null;
        this.storage.clear();
        resolve(false);
      });

    });
  }

  registroEmpresa(empresa: Empresa){
    return this.http.post(`${URL}/registro`, empresa);
  }


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
    return new Promise<boolean>((resolve) => {
      this.http.get(`${URL}/empresa/token`).subscribe(
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

 perfilEmpresa(){
   return this.http.get(`${URL}/perfil`).pipe(
     map((respuestaPerfil: RespuestaPerfil) => {
       return respuestaPerfil.perfil;
     })
   );
 }

 perfilEmpresaID(empresaID: string){
   return this.http.get(`${URL}/perfil/empresa/${empresaID}`).pipe(
     map((respuesta: any) => {
       return respuesta.perfil;
     })
   );
 }
}
