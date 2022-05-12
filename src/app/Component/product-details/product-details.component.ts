import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/Moduls/iproduct';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  recivedRow;
  constructor(public dialogRef:MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct)
   { 
     this.recivedRow=data
   }

  ngOnInit(): void {

  }
  close(){
    this.dialogRef.close();
  }
}
