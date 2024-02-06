import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {

  id: number = 0;
  contentPicture: string = '';
  contentTitle: string | null = '';
  contentDescription: string = '';
  nextPostRoute: any = '';
  prevPostRoute:any = '';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.contentTitle = value.get("title")
    )

    this.setValuesToComponent(this.contentTitle)
  }

  setValuesToComponent(title: string | null) {
    const result = dataFake.filter(article => article.title === title)[0]
    this.id = result.id;
    this.contentDescription = result.description;
    this.contentPicture = result.photoCover;
  }

  nextPost(id: number) {
    let currentId = id;
    let nextId = currentId + 1;
    this.nextPostRoute = dataFake[nextId - 1].title;

    if (dataFake[currentId - 1].title !== this.nextPostRoute){
      this.setValuesToComponent(this.nextPostRoute);
      this.router.navigate(['content', this.nextPostRoute]);
    }
  }

  prevPost(id: number) {
    let currentId = id;
    let prevId = currentId - 1;
    this.prevPostRoute = dataFake[prevId - 1].title;
    
    if (dataFake[currentId -1].title !== this.prevPostRoute){
      this.setValuesToComponent(this.prevPostRoute);
      this.router.navigate(['content', this.prevPostRoute]);
    }
  }

}
