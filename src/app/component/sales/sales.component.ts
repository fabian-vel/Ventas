import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  price: number;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSource: PeriodicElement[] = [
    {
      name: "Gaseosa",
      price: 20000
    },
    {
      name: "Malta",
      price: 20000
    },
    {
      name: "Galletas",
      price: 20000
    },
    {
      name: "Copia",
      price: 20000
    }
  ];

  displayedColumns: string[] = ['name', 'price'];

  getTotalCost() {
    return this.dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

}
