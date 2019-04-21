import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component'

const appRoutes: Routes = [
  { path: '', component: AddOrderComponent, data: { title: 'AddOrder' } },  
  { path: 'addOrder', component: AddOrderComponent, data: { title: 'AddOrder' } } ,
  { path: 'contact', component: ContactComponent, data: { title: 'AddContact' } }  
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddOrderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
