import { Component } from '@angular/core';
import { LargeCardComponent } from '../home/large-card/large-card.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    LargeCardComponent,
    SharedModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  blogTitle:string="Novo Post Titulo";
  blogDescription:string = "Descrição";
  blogPicture:string = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";

}
