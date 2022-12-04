import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getFecha(){
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return hoy;
  }

}
