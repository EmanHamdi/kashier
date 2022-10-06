import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

// declare var window: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  allProducts: Products[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  public selectedValue: any;
  public filteredList: any = [];
  public searchValue: any;
  searchText = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.deleteModal = new window.bootstrap.Modal(
    //   document.getElementById('deleteModal')
    // );
    this.get();
  }

  search(value: string): void {
    this.allProducts = this.allProducts.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }

  get() {
    this.productsService.get().subscribe((data) => {
      this.allProducts = data;
    });
  }

  selectValue(name:any) {
    this.selectedValue = name;
  }

}
