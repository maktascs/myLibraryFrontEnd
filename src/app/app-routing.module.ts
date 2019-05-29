import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { UsersComponent } from './users/users.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path:"books",component:AllbooksComponent},
  {path:"home", component:HomeComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"categories", component:AllcategoriesComponent},
  {path:"users",component:UsersComponent},
  {path:"view-students",component:ViewstudentsComponent},
  {path:"view-teachers",component:ViewteachersComponent},
  {path:"view-admins",component:ViewadminsComponent},
  {path:"adduser",component:AddUserComponent},
  {path:"delete-user",component:DeleteuserComponent},
  {path:"update-user/:id", component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AllbooksComponent]