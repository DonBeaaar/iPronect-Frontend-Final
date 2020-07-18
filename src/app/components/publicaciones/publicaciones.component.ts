import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  @Input() publicacionesHome: Publicacion[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
