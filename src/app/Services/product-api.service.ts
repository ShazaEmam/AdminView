import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Moduls/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
 
  private httpHeaders;

  constructor(private httpClient: HttpClient)
  {
    this.httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
  GetAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/Product`)
  }
  GetProductsByCatID(id:number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/Product/${id}`);
  }

  GetProductByID(productid:number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.BaseURL}/Product/${productid}`);
  }

 AddNewProduct(newproduct: IProduct): Observable<IProduct>
  {
  return this.httpClient.post<IProduct>(`http://localhost:34300/api/Product`,JSON.stringify(newproduct),{headers: new HttpHeaders({'Content-Type': 'application/json'})} )
  // return this.httpClient.post<IProduct>(`http://localhost:34300/api/Product`, JSON.stringify(newproduct),this.httpHeaders!);
  //return this.httpClient.post<IProduct>(`http://localhost:34300/api/Product`,JSON.stringify(newproduct),{ headers: this.httpHeaders?.headers});

  }
  
  UpdateProduct(updateproduct: IProduct, id: number): Observable<IProduct> 
  {
    return this.httpClient.patch<IProduct>(`${environment.BaseURL}/Product/${id}`,updateproduct)
  }

  DeleteProduct(productid:number): Observable<IProduct>
  {
    return this.httpClient.delete<IProduct>(`${environment.BaseURL}/Product/${productid}`);

  }
}
