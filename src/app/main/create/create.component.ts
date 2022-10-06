import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';
import { ModelComponent } from 'src/app/shared/model/model.component';

declare var window: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  parentMessage = "message from parent"

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
  fieldTextType: boolean | undefined;
  openModall: any;


  constructor(
    private productsService: ProductsService,
    private router: Router,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    public toastService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.openModall = new window.bootstrap.Modal(
      document.getElementById('openModall')
    );
  }

  openModal() {
    this.openModall.show();
  }

  create() {
    this.productsService.create(this.productsForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["./"]).then(() => {
            window.location.reload();
          });
          this.openModall.hide();
          this.toastService.success('Changes saved successfully');
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  cancel() {
    this.router.navigate([""])
  }

  // open() {
  //   const modalRef = this.modalService.open(ModelComponent);
  //   modalRef.componentInstance.name = 'Are you sure you want to save changes made?';
  // }


}
