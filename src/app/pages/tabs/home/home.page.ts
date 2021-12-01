import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean =  false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/3.jpg'},
      ];
      this.restaurants = [
        {
          uid: '1231wasdafsd',
          cover: "assets/imgs/1.jpg",
          name: "Stayfit",
          short_name: "stayfit",
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.59,
          price: 10,
        },
        {
          uid: '345345sd',
          cover: "assets/imgs/2.jpg",
          name: "Stayfit2",
          short_name: "stayfit2",
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.59,
          price: 10,
        },
        {
          uid: '879sdgfd',
          cover: "assets/imgs/3.jpg",
          name: "Stayfit3",
          short_name: "stayfit3",
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.59,
          price: 10,
        },
      ];
      this.isLoading = false;
    }, 3000)

  }

}
