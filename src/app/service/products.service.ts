import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Products[]>('http://localhost:3000/products');
  }

  create(payload: Products) {
    return this.http.post<Products>('http://localhost:3000/products', payload);
  }

  getById(id: number) {
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
   }

   update(payload:Products){
    return this.http.put(`http://localhost:3000/products/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Products>(`http://localhost:3000/products/${id}`);
 }
}
