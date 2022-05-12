import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddAdminComponent } from './Component/add-admin/add-admin.component';
import { AddCategoryComponent } from './Component/add-category/add-category.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
//import { AdminComponent } from './Component/admin/admin.component';
import { CategoryComponent } from './Component/category/category.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { MainContentComponent } from './Component/main-content/main-content.component';
import { ProductComponent } from './Component/product/product.component';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'',component:MainContentComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'Category',component:CategoryComponent},
    {path:'NewProduct',component:AddProductComponent},
    {path:'EditProduct/:pid',component:AddProductComponent},
    {path:'NewCategory',component:AddCategoryComponent},
    {path:'EditCategory/:pid',component:AddCategoryComponent},
    {path:'Product',component:ProductComponent},
    ]},

    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
