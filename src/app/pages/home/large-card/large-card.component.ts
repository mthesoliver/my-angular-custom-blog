import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-large-card',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './large-card.component.html',
  styleUrl: './large-card.component.scss'
})
export class LargeCardComponent {

  @Input() id:string = '0';
  @Input() blogPicture: string = 'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg';
  @Input() blogTitle: string = 'Esse é um título';
  @Input() blogDescription: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit enim mattis, odio taciti cras ridiculus feugiat netus facilisi suspendisse mi, eget montes eros metus in etiam sollicitudin sed. Aenean pellentesque ex phasellus mauris id dignissim massa orci, convallis taciti sed felis parturient euismod erat pharetra, a scelerisque pulvinar lorem ac efficitur mus.';

}
