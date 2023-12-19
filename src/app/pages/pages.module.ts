import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsService } from '../services/products/products.service';



@NgModule({
  declarations: [
    ProductsComponent,
    AboutUsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ProductsComponent,
    AboutUsComponent
  ],
  providers: [
    // Afegim el servei de products, que en aquest cas, ens serveix per obtenir tots els productes.
    ProductsService
  ],
})
export class PagesModule { }
