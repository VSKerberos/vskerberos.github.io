import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IProduct } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name','date'];
  dataSource;
  products$:Observable<IProduct[]>;
  constructor(private firebaseService: FireBaseService,) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(){
    this.firebaseService.getProducts();
    this.products$ = this.firebaseService.products$;
   
    this.products$ = this.products$.pipe(map((data) => {
      data.sort((a, b) => {
          return a.name < b.name ? -1 : 1;
       });
      return data;
      }));
    this.dataSource = this.products$;
  }

}
