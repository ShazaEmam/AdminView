import { Component, Inject, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Moduls/icategory';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  currProduct :ICategory={} as ICategory;
  constructor(
    private dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private catAPIService:CategoryAPIService
    ,private router:Router) {
   
  }
  ngOnInit() {
  }
  Cancel(): void {
    this.dialogRef.close(false);
  }
  onDelete(): void {
    this.catAPIService.DeleteCategory(this.data).subscribe( cat=>{
      console.log("Category deleted");
      this.router.navigate(['/Category']);
    });
    this.dialogRef.close(true);
  }
  

}
