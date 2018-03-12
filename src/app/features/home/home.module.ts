import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CreatePhoneNumberComponent } from './create-phone-number';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    CreatePhoneNumberComponent
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
