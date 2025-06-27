import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {
private _baseApi = 'https://dummyjson.com/products'
  constructor(private http:HttpClient) {
   }
 getProducts(){
   return this.http.get(this._baseApi);
 }
 getProductById(id:number|string){
 return this.http.get(`https://dummyjson.com/products/${id}`)
 }
 

}
