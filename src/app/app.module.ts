import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import {HttpServiceService} from './http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentRegisterComponent } from './parent-register/parent-register.component';
import { ChildRegisterComponent } from './child-register/child-register.component';
import { HomeComponent } from './home/home.component';
import { ViewRoutingComponent } from './view-routing/view-routing.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';

const appRoute : Routes=[
  {path:'',component: HomeComponent},
  {path:'notFound',component: ErrorRoutingComponent},
  {path: 'view/:id',component: ViewRoutingComponent},
  {path: 'dashboard',component:ParentRegisterComponent},
  {path: 'home',component:HomeComponent},
  {path:'**',redirectTo:'/notFound'}
] 

@NgModule({
  declarations: [
    AppComponent,
    ParentRegisterComponent,
    ChildRegisterComponent,
    HomeComponent,
    ViewRoutingComponent,
    ErrorRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
