import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant, RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RestaurantFormComponent {
  @Input() selectedRestaurant: Restaurant | null = null;
  @Output() formSubmit = new EventEmitter<void>();

  restaurantFormModel: Restaurant = {
    id: 0,
    name: '',
    description: '',
    location: '',
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnChanges() {
    if (this.selectedRestaurant) {
      this.restaurantFormModel = { ...this.selectedRestaurant };
    } else {
      this.resetForm();
    }
  }

  saveRestaurant() {
    if (this.selectedRestaurant) {
      this.restaurantService.updateRestaurant(this.restaurantFormModel);
    } else {
      this.restaurantService.addRestaurant(this.restaurantFormModel);
    }
    this.resetForm();
    this.formSubmit.emit();
  }

  resetForm() {
    this.restaurantFormModel = {
      id: 0,
      name: '',
      description: '',
      location: '',
    };
    this.selectedRestaurant = null;
  }
}
