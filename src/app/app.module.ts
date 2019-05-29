import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FormsModule }   from '@angular/forms';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AllbooksComponent,
    AddcategoryComponent,
    AllcategoriesComponent,
    UsersComponent,
    AddUserComponent,
    DeleteuserComponent,
    ViewstudentsComponent,
    ViewteachersComponent,
    ViewadminsComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
