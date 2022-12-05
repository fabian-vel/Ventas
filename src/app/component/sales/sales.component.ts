import { Component, OnInit } from '@angular/core';
import { SalesListService } from 'src/app/services/sales-list.service';
import { Products } from 'src/app/models/product.models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  dataSource: Products[] = [];

  constructor(
    private salesListaService: SalesListService
  ) {
    this.dataSource = this.salesListaService.getListaProductSold();
   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'price'];

  getTotalCost() {
    return this.salesListaService.getTotalCost();
  }

  getFecha() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return hoy;
  }

}
