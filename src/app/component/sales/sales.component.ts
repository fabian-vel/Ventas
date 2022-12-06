import { Component, OnInit, ViewChild} from '@angular/core';
import { SalesListService } from 'src/app/services/sales-list.service';
import { Products } from 'src/app/models/product.models';
import {MatPaginator} from '@angular/material/paginator';

const transactions: Products[] =[];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {

  constructor(
    private salesListaService: SalesListService
  ) {}
  

  ngOnInit(): void {
  }

  getProduct() {
    return this.salesListaService.getListaProductSold();
  }

  getTotalCost() {
    return this.salesListaService.getTotalCost();
  }

  getFecha() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return hoy;
  }

}
