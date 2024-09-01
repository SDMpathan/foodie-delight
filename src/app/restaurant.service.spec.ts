import { TestBed } from '@angular/core/testing';
import { RestaurantService, Restaurant } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a restaurant successfully', () => {
    const restaurant: Restaurant = { id: 0, name: 'Test Restaurant', description: 'A test restaurant', location: 'Test City' };
    service.addRestaurant(restaurant);

    service.restaurantsObs.subscribe((restaurants) => {
      expect(restaurants.length).toBe(1);
      expect(restaurants[0].name).toBe('Test Restaurant');
    });
  });

  it('should not add a restaurant with a duplicate name', () => {
    const restaurant1: Restaurant = { id: 0, name: 'Duplicate Restaurant', description: 'First instance', location: 'City A' };
    const restaurant2: Restaurant = { id: 0, name: 'Duplicate Restaurant', description: 'Second instance', location: 'City B' };
    spyOn(window, 'alert');

    service.addRestaurant(restaurant1);
    service.addRestaurant(restaurant2);

    service.restaurantsObs.subscribe((restaurants) => {
      expect(restaurants.length).toBe(1);
      expect(window.alert).toHaveBeenCalledWith('Restaurant with name Duplicate Restaurant already exists.');
    });
  });

  it('should update a restaurant successfully', () => {
    const restaurant: Restaurant = { id: 1, name: 'Initial Name', description: 'Initial Description', location: 'Initial Location' };
    service.addRestaurant(restaurant);

    const updatedRestaurant: Restaurant = { id: 1, name: 'Updated Name', description: 'Updated Description', location: 'Updated Location' };
    service.updateRestaurant(updatedRestaurant);

    service.restaurantsObs.subscribe((restaurants) => {
      expect(restaurants[0].name).toBe('Updated Name');
      expect(restaurants[0].description).toBe('Updated Description');
    });
  });  

  it('should delete a restaurant successfully', () => {
    const restaurant: Restaurant = { id: 1, name: 'To Be Deleted', description: 'This will be deleted', location: 'Delete City' };
    service.addRestaurant(restaurant);

    service.deleteRestaurant(1);

    service.restaurantsObs.subscribe((restaurants) => {
      expect(restaurants.length).toBe(0);
    });
  });
});
