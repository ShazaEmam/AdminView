import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Moduls/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  currProduct :IProduct={} as IProduct;
  constructor(
    private dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private prdAPIService:ProductApiService
    ,private router:Router) {
   
  }
  ngOnInit() {
  }
  Cancel(): void {
    this.dialogRef.close(false);
  }
  Delete(): void {
    this.prdAPIService.DeleteProduct(this.data).subscribe( pro=>{
      console.log("product deleted");
      this.router.navigate(['/Product']);
    });
    this.dialogRef.close(true);
  }
  
}
