import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';
import { map } from 'rxjs/internal/operators';
import { IProduct } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import { defaultDialogConfig } from '../../material/default-dialog-config';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { IMaterial } from 'src/app/core/core/models/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['code', 'name','date','demo-actions'];
  dataSource;
  products$:Observable<IProduct[]>;
  deleteMessage:string='Başarı ile silindi';
  @ViewChild('paginatorUp') Paginator: MatPaginator;
  length:number = 100;
  pageSize:number = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  currentPage:number;
  pageEvent: PageEvent;
  constructor(private firebaseService: FireBaseService,
              private spinner:SpinnerService,
              private dialog: MatDialog,
              private router: Router) { }

  ngAfterViewInit(): void {

   this.Paginator._intl.itemsPerPageLabel="Her sayfada";
   this.Paginator._intl.nextPageLabel="Sonraki Sayfa";
   this.Paginator._intl.previousPageLabel="Önceki Sayfa";


  }

  ngOnInit(): void {
    this.getItems();


  }


  getItems(){
    if(!this.firebaseService.IsMaterialsInLocalStorage()){
    this.firebaseService.getMaterialsObservable();
    }

    this.firebaseService.getProducts();
    this.products$ = this.firebaseService.products$;

    this.products$ = this.products$.pipe(map((data) => {
      data.sort((a, b) => {
          return a.code < b.code ? -1 : 1;
       })
      return data;
      }));

     let y = this.products$.pipe(
        map((data)=>{

        return  data.slice(0,10);

        }


      ));

    this.dataSource =y;

    this.dataSource.paginator = this.Paginator;
  }

  deleteRecord(id: any){
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


  routeEdit(product){
    const navigationExtras: NavigationExtras = {
      state: {
        mode: 'update',
        product: product
        }
    };
    this.firebaseService.getProductDetail(product.id).then(()=>{
      this.router.navigate(['product/update'], navigationExtras );
    });

  }




  getPaginatorData(event){

    this.pageSize = event.pageSize;
    this.currentPage= event.currentPage;
    console.log(event);

    const end = (event.pageIndex + 1) * this.pageSize;
    const start = event.pageIndex * this.pageSize;



    this.products$ = this.products$.pipe(map((data) => {
      data.slice(start,end)

      return data;
      }));

      let y = this.products$.pipe(
        map((data)=>{

        return  data.slice(start,end);

        }


      ));

      this.dataSource = y;
      this.dataSource.paginator = this.Paginator;
    return event;

    }


}
