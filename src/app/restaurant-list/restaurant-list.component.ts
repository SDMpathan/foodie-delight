import { Component, Output, EventEmitter } from '@angular/core';
import { Restaurant, RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RestaurantListComponent {
  restaurantsObs: Observable<Restaurant[]>;

  @Output() editRestaurant = new EventEmitter<Restaurant>();

  constructor(private restaurantService: RestaurantService) {
    this.restaurantsObs = this.restaurantService.restaurantsObs;
  }

  deleteRestaurant(id: number) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.restaurantService.deleteRestaurant(id);
    }
  }

  onEdit(restaurant: Restaurant) {
    this.editRestaurant.emit(restaurant);
  }
}
