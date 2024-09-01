import { Component } from '@angular/core';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { Restaurant } from './restaurant.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RestaurantFormComponent,
    RestaurantListComponent,
  ],
})
export class AppComponent {
  title = 'FoodieDelight';
  selectedRestaurant: Restaurant | null = null;

  onEditRestaurant(restaurant: Restaurant) {
    this.selectedRestaurant = restaurant;
  }

  onFormSubmit() {
    this.selectedRestaurant = null;
  }
}
