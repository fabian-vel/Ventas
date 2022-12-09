import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/models/product.models';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-a-product',
  templateUrl: './a-product.component.html',
  styleUrls: ['./a-product.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class AProductComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  @Input() product: Products = {
    name: '',
    img: '',
    price: 0
  }

  @Output() addEventVenta = new EventEmitter<Products>();

  onAddNewVenta() {
    this.addEventVenta.emit(this.product);
  }

  open(content: any) {
		this.modalService.open(content);
	}


}
