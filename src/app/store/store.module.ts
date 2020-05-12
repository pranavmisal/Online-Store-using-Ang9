import { StoreComponent } from './store.component';
import { ModelModule } from './../../Model/Model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ModelModule, FormsModule, BrowserModule],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
