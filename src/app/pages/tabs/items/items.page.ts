import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  veg: boolean = false;
  restaurants = [
    {
      uid: '1231wasdafsd',
      cover: "assets/imgs/1.jpg",
      name: "Stayfit",
      short_name: "stayfit",
      address: '1600 Pennsylvania, Washington, DC',
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
      address: '1313 Mockingbird Lane, Salem, WA',
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
      address: '2010 Page St, Springfield, MO',
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

  categories: any[] = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ];

  allItems = [
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste asdfasd asdfasdf asdfasdf",
        id: "i1",
        name: "Pizza",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 200,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    })
  }

  getItems() {
    this.data = {};
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    this.items = this.allItems;
    console.log('restaurant:', this.data);
  }

  getCuisine(cuisine) {
    return cuisine.join(', ')
  }

  vegOnly(event) {
    console.log(event.detail.checked)
  }

}
