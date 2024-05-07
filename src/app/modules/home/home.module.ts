import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';
import { PeopleTableComponent } from '../../components';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PeopleTableComponent
  ]
})
export class HomeModule { }
