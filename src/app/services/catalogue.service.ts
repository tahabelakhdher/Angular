import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: string = "http://localhost:8081/SpringMVC/servlet"

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(page: number, size: number) {
    return this.httpClient.get(this.host + "/produits?page=" + page + "&size=" + size);
  }

  public getProductsByKeyword(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + "/produits/search/byDesignationPage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteResource(url) {
    return this.httpClient.delete(url);
  }

  public saveResource(url,data):Observable<any>{
    return this.httpClient.post(url,data);
  }

  public getResource(url):Observable<Product>{
    return this.httpClient.get<Product>(url);
  }

  public updateResource(url,data):Observable<any>{
    return this.httpClient.put(url,data);
  }

}
