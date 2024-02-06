import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    RouterLink,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
