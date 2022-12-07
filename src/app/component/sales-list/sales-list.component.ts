import { Component, OnInit } from '@angular/core';
import { SalesListService } from 'src/app/services/sales-list.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  constructor(
    private listaSalesService: SalesListService
  ) { }

  ngOnInit(): void {
  }

  getSales() {
    return this.listaSalesService.getListaProductSold();
  }

}
