import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaService } from '../services/empresa.service';
import { TokenHeaderService } from '../services/token-header.service';

@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanLoad {

  constructor(private empresaService: EmpresaService, private tokenHeaderService: TokenHeaderService){}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.empresaService.validaToken();
  }
}
