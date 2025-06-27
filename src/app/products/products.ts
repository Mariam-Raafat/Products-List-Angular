import { Component, effect, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../productService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products  {
// readonly id = input<string>();
router = inject(ActivatedRoute);
productService = inject(productService);

readonly productId = signal('1');
readonly productDetails = signal<any>(null);

idFromRoute = this.router.paramMap.subscribe(params =>{
  const id = params.get('id');
  if(id) this.productId.set(id)
})


loadProduct = effect(()=>{
  const id = this.productId();
  if (id) {
    this.productService.getProductById(id).subscribe(data => {
      this.productDetails.set(data);
    })
    
  }
})


}
