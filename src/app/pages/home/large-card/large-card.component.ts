import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-card',
  standalone: true,
  imports: [],
  templateUrl: './large-card.component.html',
  styleUrl: './large-card.component.scss'
})
export class LargeCardComponent {

  @Input() blogPicture:string='https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg';
  @Input() blogTitle:string ='';
  @Input() blogDescription:string='';

}
