import { Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  slides = [
    { img: "asets/images/Community-1.svg" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  slideConfig = {
    "dots": true,
    "infinite": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "responsive": [
      {
        "breakpoint": 991,
        "settings": {
          "slidesToShow": 3,
        }
      },
      {
        "breakpoint": 767,
        "settings": {
          "slidesToShow": 1,
        }
      }
    ]
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit() {
    console.log('slick initialized');
  }
}
