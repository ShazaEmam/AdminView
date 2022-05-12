import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Moduls/icategory';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  NewCategoryList:ICategory[]=[];
  constructor(
      private catAPIService:CategoryAPIService 
     ,private router:Router
     ,private RefDialoge:MatDialog
      ) { }
   result: string = '';
  ngOnInit(): void 
  {
     this.catAPIService.GetAllCategoris().subscribe(catList=>{this.NewCategoryList=catList;}); 
  }
  OpenDialoge(){
   const dialogRef=this.RefDialoge.open(AddCategoryComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     this.catAPIService.GetAllCategoris().subscribe(catList=>{this.NewCategoryList=catList;}); 

    });
  }
  
  confirmDialog(id:number): void {

     const dialogConfig = new MatDialogConfig();
     dialogConfig.data=id;
     const dialogRef = this.RefDialoge.open(DeleteCategoryComponent,dialogConfig );
 
     dialogRef.afterClosed().subscribe(dialogResult => {
       this.result = dialogResult;
       this.catAPIService.GetAllCategoris().subscribe(catList=>{this.NewCategoryList=catList;}); 

     });
   }
}
