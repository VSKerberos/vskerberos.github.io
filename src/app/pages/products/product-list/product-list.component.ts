import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IProduct } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import { defaultDialogConfig } from '../../material/default-dialog-config';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
  constructor(private firebaseService: FireBaseService,
              private spinner:SpinnerService,
              private dialog: MatDialog,
              private router: Router) { }

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
    //console.log('Deleted recor is: '+ id);
    this.firebaseService.deleteCategorie(id);
    this.firebaseService.deleteProduct(id);
    this.getItems();
    this.spinner.sendClickEvent(this.deleteMessage);
  }

  detail(item){
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle:"Ürün Güncelleme",
      item,
      mode: 'update',
      recordId:item.id,
    };
    this.firebaseService.getProductDetail(item.id).then(()=>{
      this.dialog.open(ProductDetailComponent, dialogConfig)
      .afterClosed()
      .subscribe();
    });
  }

  routeEdit(productId){
    const navigationExtras: NavigationExtras = {
      state: {
        mode: 'update',
        productId: productId
        }
    };
    this.router.navigate(['product'], navigationExtras );
  }
} 
