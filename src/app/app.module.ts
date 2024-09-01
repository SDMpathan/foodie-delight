import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RestaurantFormComponent, RestaurantListComponent],
})
export class AppModule {}
