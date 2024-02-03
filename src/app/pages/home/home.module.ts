import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeCardComponent } from './large-card/large-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LargeCardComponent,
    SmallCardComponent,
    MenuTitleComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    LargeCardComponent,
    SmallCardComponent,
    MenuTitleComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
