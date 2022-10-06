import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';
import { ToastrService } from 'ngx-toastr'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var window: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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
  deleteModal: any;
  idTodelete: number = 0;
  allProducts: Products[] = [];
  fieldTextType: boolean | undefined;
  closeResult!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    public toastService: ToastrService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
  }

  getById(id: number) {
    this.productsService.getById(id).subscribe((data) => {
      this.productsForm = data;
    });
  }

  update() {
    this.productsService.update(this.productsForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["./"]).then(() => {
            window.location.reload();
          });
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.toastService.success('Changes saved successfully');
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.productsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allProducts = this.allProducts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
        this.router.navigate(['./']).then(() => {
          window.location.reload();
        });
        this.toastService.success('Product deleted successfully');
      },
    });
  }

  cancel() {
    this.router.navigate([""])
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // openBackDropCustomClass(content: any) {
  //   this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  // }

}
