import { Component, OnInit } from '@angular/core';
import { SalesListService } from 'src/app/services/sales-list.service';
import { Products } from 'src/app/models/product.models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(
    private salesListaService: SalesListService
  ) { }

  ngOnInit(): void {
  }

  product: Products[] = [];

  get dataSource() {
    return  this.product = this.salesListaService.listaProductSold;
  }

  displayedColumns: string[] = ['name', 'price'];

  getTotalCost() {
    return this.salesListaService.listaProductSold.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
  getFecha() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return hoy;
  }

}
