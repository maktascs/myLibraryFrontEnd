import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';

const routes: Routes = [
  {path:"books",component:AllbooksComponent},
  {path:"home", component:HomeComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"categories", component:AllcategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AllbooksComponent]