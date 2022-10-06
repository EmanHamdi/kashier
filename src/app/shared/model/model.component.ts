import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @Input() name:any;
  productsForm: Products = {
    id: 0,
    name: '',
    type: [{
      type1: false,
      type2: false
    }],
    category: '',
    supCategory: false,
    refrenceId: 0,
    pass: '',
    deliveryFees: 0,
    deliveryFeesPercentage: 0
  };

  constructor(
    public activeModal: NgbActiveModal,
    private productsService: ProductsService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  // create() {
  //   this.productsService.create(this.productsService.test)
  //     .subscribe({
  //       next: (data) => {
  //         console.log('this.productsForm',this.productsService.test);

  //         console.log('data',data);
  //         const closeMessage = 'Modal closed';
  //         this.router.navigate(["/products"]);
  //         this.modalService.open(ModelComponent);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     })
  // }

}
