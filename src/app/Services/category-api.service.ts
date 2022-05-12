import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Moduls/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })
    }
  }
  GetAllCategoris():Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.BaseURL}/Category`)
  }
 
  GetCategoryByID(categoryid:number): Observable<ICategory>
  {
    return this.httpClient.get<ICategory>(`${environment.BaseURL}/Category/${categoryid}`);
  }

 AddNewCategory(newcategory: ICategory): Observable<ICategory>
  {
    return this.httpClient.post<ICategory>(`${environment.BaseURL}/Category`,JSON.stringify(newcategory),{headers: new HttpHeaders({'Content-Type': 'application/json'})})  
  }
  
  UpdateCategory(updatecategory: ICategory, id: number): Observable<ICategory> 
  {
    return this.httpClient.patch<ICategory>(`${environment.BaseURL}/Category/${id}`,updatecategory)
  }

  DeleteCategory(categoryid:number): Observable<ICategory>
  {
    return this.httpClient.delete<ICategory>(`${environment.BaseURL}/Category/${categoryid}`);
  } 
}
