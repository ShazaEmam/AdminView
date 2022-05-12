import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/Moduls/icategory';
import { CategoryAPIService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  AddCategoryForm: FormGroup;
  newCategory: ICategory={} as ICategory;
  constructor(
    private catapiservice:CategoryAPIService,
    private formbuilder: FormBuilder
    ) { 
    this.AddCategoryForm=formbuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
     
    })
  }

  ngOnInit(): void {
  }
  saveProduct()
  {
      this.newCategory.name=this.AddCategoryForm.value.name;
       console.log(this.newCategory)
      this.catapiservice.AddNewCategory(this.newCategory).subscribe(prd=>{
        let ref = document.getElementById("cancel")
        ref?.click();
        this.AddCategoryForm.reset();
      });
      
    console.log(this.AddCategoryForm.value); 
  }
}
