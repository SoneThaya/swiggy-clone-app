import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  }
  query: any;
  isLoading: boolean;

  allRestaurants: any[] = [
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
      price: 10,
    },
  ];

  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500)
  }

  async onSearchChange(event) {
    console.log(event.detail.value)
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000)
    }
  }
}
