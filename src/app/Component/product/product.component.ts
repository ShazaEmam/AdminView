import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Moduls/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {  DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   SelectedRow;
  DataRow; 
  NewProductList:IProduct[]=[];
  dataSource;
  
  constructor(
     private prdAPIService:ProductApiService
    ,private router:Router
    ,private RefDialoge:MatDialog,
   
    ) { }

  result: string = '';
  displayedColumns: string[] = ['name', 'price', 'quantity', 'image','detail','edit','delete'];
  ngOnInit(): void 
  {

      this.prdAPIService.GetAllProducts().subscribe(prdList=>{
        this.dataSource=new MatTableDataSource<IProduct>(prdList)});
  }
   OnRowClicked(row)
  {
    console.log(row);
    this.SelectedRow=row;
  } 
  OpenProductDetials(){
    const dialogRef=this.RefDialoge.open(ProductDetailsComponent,{
      data:{
        name:this.SelectedRow.name,
        price:this.SelectedRow.price,
        quantity:this.SelectedRow.quantity,
        image:this.SelectedRow.image,
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.DataRow=result;
      console.log(result)
    });

  } 
  OpenDialoge(){

    const dialogRef=this.RefDialoge.open(AddProductComponent)
    dialogRef.afterClosed().subscribe( res=>{
      this.prdAPIService.GetAllProducts().subscribe(prdList=>{
        this.dataSource=new MatTableDataSource<IProduct>(prdList)});
    });

   
  }
  OpenDialogeEdit(product:IProduct){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=product;
    console.log(dialogConfig.data);
    this.RefDialoge.open(AddProductComponent,dialogConfig); 
  }
 
confirmingDelet(id:number): void {
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=id;
    const dialogRef = this.RefDialoge.open(DeleteProductComponent,dialogConfig );
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;

      this.prdAPIService.GetAllProducts().subscribe(prdList=>{
        this.dataSource=new MatTableDataSource<IProduct>(prdList)});
    });
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
