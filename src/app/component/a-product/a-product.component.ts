import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/product.models';

@Component({
  selector: 'app-a-product',
  templateUrl: './a-product.component.html',
  styleUrls: ['./a-product.component.scss']
})
export class AProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Products = {
    name: '',
    img: '',
  }

}
