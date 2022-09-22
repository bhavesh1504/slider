import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'slider';

  data = [
    { name:'Nature', title:'Some quick example text to build on the card title and make up the bulk of the cards content.', path: 'https://source.unsplash.com/800x600/?nature'},
    { name:'Car', title:'Some quick example text to build on the card title and make up the bulk of the cards content.', path: 'https://source.unsplash.com/800x600/?car'},
    { name:'Moto', title:'Some quick example text to build on the card title and make up the bulk of the cards content.', path: 'https://source.unsplash.com/800x600/?moto'},
    { name:'Fantasy', title:'Some quick example text to build on the card title and make up the bulk of the cards content.', path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
