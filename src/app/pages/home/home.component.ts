import { Component, OnInit } from '@angular/core';
import { HomeModule } from './home.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  colModel = '';
  colModelTwo = '';

  ngOnInit(): void {
    this.verifyIsMobile()
  }

  verifyIsMobile() {
    this.selectColMod()
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 769) {
        this.colModel = 'col-1';
        this.colModelTwo = 'col-2'
      } else if (window.innerWidth > 769) {
        this.colModel = 'col-2';
        this.colModelTwo = 'col-4'
      }
    })
  }

  selectColMod() {
    if (window.innerWidth <= 769) {
      this.colModel = 'col-1';
      this.colModelTwo = 'col-2'
    } else if (window.innerWidth > 769) {
      this.colModel = 'col-2';
      this.colModelTwo = 'col-4'
    }
  }
}

