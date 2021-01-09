import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = '/assets/products.json';
  product: number;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(catchError(this.handleError<Product[]>([])));
  }

  // using the server api when set up
  getProduct(id: string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>())
    );
  }

  // getItemById(id: number): any {
  //   return this.http.get<Array<Product>>(this.productsUrl)
  //     .pipe(
  //       map((items: Array<Product>) => {
  //         return items.find((item: Product) => {
  //           return item._id === id;
  //         });
  //       })
  //     );
  // }

  getProductByFind(id): void {
    this.http.get(this.productsUrl)
      .pipe(map(() => {})).subscribe(result => {
      console.log(result);
    });
    // return this.productList.find(product => product._id === id);
  }

  setProduct(id): void {
    console.log('setting product...');
    console.log(id);
    this.product = id;
  }

  private handleError<T>(result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
