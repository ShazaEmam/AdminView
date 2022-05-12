import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
/* import { MatFileUploadModule } from 'angular-material-fileupload'; */


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';

import { NavbarComponent } from './Component/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainContentComponent } from './Component/main-content/main-content.component';
import { ProductComponent } from './Component/product/product.component';
import { CategoryComponent } from './Component/category/category.component';
import { AddCategoryComponent } from './Component/add-category/add-category.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { HomeComponent } from './Component/home/home.component';


import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { DeleteProductComponent } from './Component/delete-product/delete-product.component';
import { DeleteCategoryComponent } from './Component/delete-category/delete-category.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { SideNavComponent } from './Component/side-nav/side-nav.component';





@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NavbarComponent,
    MainContentComponent,
    ProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddProductComponent,
    HomeComponent,
  
    ProductDetailsComponent,
    DeleteProductComponent,
    DeleteCategoryComponent,
    LoginComponent,
    RegisterComponent,
    SideNavComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteProductComponent]
})
export class AppModule { }
