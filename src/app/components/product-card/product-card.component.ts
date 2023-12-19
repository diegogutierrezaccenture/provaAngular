import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product:any

  formVisible = 'none';
  clientCode = '';
  direction = '';

  showBuyForm() {
    this.formVisible = 'block';
  }
  
  buyProduct() {
    if(this.clientCode != '' && this.direction != ''){
      alert(`Codi client: ${this.clientCode}   Adreça: ${this.direction}   Product: ${this.product.name}`)
      this.clientCode = '';
      this.direction = '';
    }
    else
      alert("Falta informació en les dades de compra!")
  }

  addToCart() {
    alert("Producte afegit a la cistella!")
    this.formVisible = 'none';
  }

}
