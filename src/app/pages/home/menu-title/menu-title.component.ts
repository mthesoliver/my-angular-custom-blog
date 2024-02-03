import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.scss'
})
export class MenuTitleComponent {
  title:string="Um blog feito em angular"
}
