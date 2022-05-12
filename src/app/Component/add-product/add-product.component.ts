import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Moduls/icategory';
import { IProduct } from 'src/app/Moduls/iproduct';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { environment } from 'src/environments/environment';
import { ProductComponent } from '../product/product.component';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newproduct: IProduct={} as IProduct;
  CategoryList: ICategory[]=[];
  idproduct:number=0;
  AddproductForm: FormGroup;
  Progress: number=0;
  message: string='';
  CatID:number=0;
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(
    private prdAPIService:ProductApiService
    ,private router:Router
    ,private catapiservice:CategoryAPIService
    ,private activatedRoute:ActivatedRoute
    ,private formbuilder: FormBuilder
    ,private httpClient: HttpClient
    ,private dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct)
     {
    this.AddproductForm=formbuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      quantity:['',[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      categoryId:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.catapiservice.GetAllCategoris().subscribe(catlist=>{this.CategoryList=catlist});
   
     this.activatedRoute.paramMap.subscribe(params=>{
      var num:any;
      num=params.get('id');
     // this.getproductbyid(num)
    });
     
    /* this.idproduct=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.idproduct!=0)
    {
      this.prdAPIService.GetProductByID(this.idproduct).subscribe(prd=>{
        this.newproduct=prd;
      });
    } */

  }
 /*  getproductbyid(id:number){

    this.prdAPIService.GetProductByID(id).subscribe(

      (response:any)=>{
        this.newproduct=response;
        console.log(this.newproduct);
    },(error:any)=>{ console.log(error)}
     );} */
  saveProduct()
  {
    this.idproduct=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.idproduct!=0)
    {
      this.prdAPIService.UpdateProduct(this.data,this.idproduct).subscribe(prd=>{
        let ref = document.getElementById("cancel")
        ref?.click();
        this.AddproductForm.reset();
      });
    }
    else
    {
      this.newproduct.name=this.AddproductForm.value.name;
      this.newproduct.price=this.AddproductForm.value.price;
      this.newproduct.quantity=this.AddproductForm.value.quantity;
      this.newproduct.categoryId=this.AddproductForm.value.categoryId;
       console.log(this.newproduct)
      this.prdAPIService.AddNewProduct(this.newproduct).subscribe(prd=>{
        this.router.navigate(['/Products']);
      });
    }
    
      
    console.log(this.AddproductForm.value); 
  }

  uploadFile = (files:any,file:string) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.httpClient.post(`${environment.BaseURL}/Product/uploadImage`,formData, {reportProgress: true, observe: 'events'})
    .subscribe({
      next: (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.Progress = Math.round(100 * event.loaded);
      else if (event.type === HttpEventType.Response) {
        console.log(JSON.stringify(event.body));
        console.log(file);
        this.newproduct.image=file.split('\\')[2];
        this.message = 'Upload success.';
       // this.onUploadFinished.emit(event.body);
      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
 
}
}

