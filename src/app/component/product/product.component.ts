import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.models';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
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
    },
    {
      name: "Cartulina",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    },
    {
      name: "Lapiz",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png"
    }
  ]
}
