import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantData: Restaurant[] = [];

  private restaurantsSubject = new BehaviorSubject<Restaurant[]>(
    this.restaurantData
  );
  restaurantsObs = this.restaurantsSubject.asObservable();

  addRestaurant(restaurant: Restaurant) {
    if (this.restaurantData.some((r) => r.name === restaurant.name)) {
      window.alert(`Restaurant with name ${restaurant.name} already exists.`);
      return;
    }
    restaurant.id =
      this.restaurantData.length > 0
        ? Math.max(...this.restaurantData.map((r) => r.id)) + 1
        : 1;
    this.restaurantData.unshift(restaurant);
    this.restaurantsSubject.next(this.restaurantData);
    window.alert(`${restaurant.name} added succesfully.`);
  }

  updateRestaurant(restaurant: Restaurant) {
    if (
      this.restaurantData.some(
        (r) => r.name === restaurant.name && r.id !== restaurant.id
      )
    ) {
      window.alert(`Restaurant with name ${restaurant.name} already exists.`);
      return;
    }
    const index = this.restaurantData.findIndex((r) => r.id === restaurant.id);
    if (index !== -1) {
      this.restaurantData[index] = restaurant;
      this.restaurantsSubject.next(this.restaurantData);
      window.alert(`${restaurant.name} updated succesfully.`);
    }
  }

  deleteRestaurant(id: number) {
    this.restaurantData = this.restaurantData.filter(
      (restaurant) => restaurant.id !== id
    );
    this.restaurantsSubject.next(this.restaurantData);
    window.alert('Restaurant deleted successfully!');
  }
}
