import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AvatarComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }
