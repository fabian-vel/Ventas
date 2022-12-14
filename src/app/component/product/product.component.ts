import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/product.models';
import { SalesListService } from 'src/app/services/sales-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private salesListaService: SalesListService
  ) { }

  ngOnInit(): void {
  }

  products: Products[] = [
    {
      name: "Gaseosa",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 1000
    },
    {
      name: "Malta",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 1300
    },
    {
      name: "Galletas",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 300
    },
    {
      name: "Copia",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 200
    },
    {
      name: "Cartulina",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 2000
    },
    {
      name: "Lapiz",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 1000
    },
    {
      name: "Recreo",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 800
    },
    {
      name: "Cartulina 8vo",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 800
    },
    {
      name: "Lapicero",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 1000
    },
    {
      name: "Resma",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 23000
    },
    {
      name: "Yupi",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 300
    },
    {
      name: "Speed Max",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 1600
    },
    {
      name: "Gaseosa Litro",
      img: "https://uploadgerencie.com/imagenes/devolucion-productos.png",
      price: 2500
    }
  ];

  onAddListaVenta(product: Products) {
    //console.log(product);
    this.salesListaService.addProduct(product);
  }
}
