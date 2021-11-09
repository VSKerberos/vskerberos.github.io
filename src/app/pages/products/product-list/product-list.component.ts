import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IProduct } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { SpinnerService } from 'src/app/core/spinner.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name','date','demo-actions'];
  dataSource;
  products$:Observable<IProduct[]>;
  deleteMessage:string='Başarı ile silindi';
  constructor(private firebaseService: FireBaseService,private spinner:SpinnerService) { }

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

  deleteRecord(id: any){
    console.log('Deleted recor is: '+ id);
    //this.firebaseService.deleteCategorie(id);
    this.firebaseService.deleteProduct(id);
    this.getItems();
    this.spinner.sendClickEvent(this.deleteMessage);
  }
}
