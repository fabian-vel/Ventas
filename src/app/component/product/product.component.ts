import { Component, OnInit } from '@angular/core';

interface Products {
  name: string;
  img: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listProduct: Products[] = [
    {
      name: "Gaseosa",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    },
    {
      name: "Malta",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    },
    {
      name: "Galletas",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    },
    {
      name: "Copia",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    }
  ]
}
