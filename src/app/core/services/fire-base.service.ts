import { ICategory } from 'src/app/core/core/models/category';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { retry } from 'rxjs-compat/operator/retry';
import { map, shareReplay } from 'rxjs/internal/operators';
import {IMaterial} from '../core/models/material'
import { IProduct, IProductMat, IProductMaterial } from '../core/models/product';


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
   racesCollection: AngularFirestoreCollection<IMaterial>;

  constructor(private firestore: AngularFirestore) { }

    _mechanics = new BehaviorSubject<IMaterial[]>([]);

    private subject = new BehaviorSubject<ICategory[]>([]);
    categories$: Observable<ICategory[]> = this.subject.asObservable();

    private subjectMaterial = new BehaviorSubject<IMaterial[]>([]);
    materials$ : Observable<IMaterial[]> = this.subjectMaterial.asObservable();

    private subjectProduct = new BehaviorSubject<IProduct[]>([]);
    products$ :Observable<IProduct[]> = this.subjectProduct.asObservable();

    private subjectProductMaterial = new BehaviorSubject<IProductMaterial[]>([]);
    materialproduct$: Observable<IProductMaterial[]> = this.subjectProductMaterial.asObservable();

    public NewProductId: string;

    private dataStore: { todos: IProductMaterial[] } = { todos: [] };
    private _todos = new BehaviorSubject<IProductMaterial[]>([]);
    readonly todos = this._todos.asObservable();

    localdata: IProductMaterial[]  =[];

  getMaterialsByObject(){
    return this.firestore.collection('material').ref.get()
    .then((querySnapshot)=> {
      const data: IMaterial[] = [];
      querySnapshot.forEach((doc)=>{
        data.push(doc.data() as IMaterial );
        let d = doc.data() as IMaterial;
      })
      
    });
      
  }

  deleteCategorie(data)
  {
    return this.firestore.collection("category").doc(data).delete();
  }

  getMaterials(){
    return this.firestore.collection('material').snapshotChanges().pipe(
      
    );
    }

    getMaterialsObservable(){
      return this.firestore.collection('material').ref.get().then((querySnapshot)=>{
        const data: IMaterial[] =[];
        querySnapshot.forEach((doc)=> {
          const local = doc.data() as IMaterial;
          const id = doc.id;
          data.push({id,...local} as IMaterial);
        });
        this.subjectMaterial.next(data);
        localStorage.setItem('materials', JSON.stringify(data));
      });
      
      }

      deleteProduct(data)
      {
       this.firestore.doc(`productmaterial/${data}`).delete()
       .catch(error => {console.log(error); })
       .then(() =>{
         this.firestore.doc(`product/${data}`).delete()
         .catch(secerr=> {console.log(secerr);})
         .then(()=>console.log(`Deleting question (${data})`))
       });
      }

      updateProductMaterial(data:IProductMat,id:any){

         return this.firestore.doc(`productmaterial/${id}`).update(data);
      }

      updateProduct(data:IProduct,id:any) {
      return  this.firestore.doc('product/' + id).update(data);
     }

        getProductDetail(data) {
        
        let local :IProductMaterial[];
        this.localdata=[];
       return this.firestore.collection('productmaterial').doc(data).ref.get().then((doc)=>{
          if(doc.exists){
            local= doc.data()["productMaterial"] as IProductMaterial[];
            
            local.forEach((elem)=>{
              console.log('element id:=>'+elem.id);
              this.localdata.push(elem);
            });
          }
        });
       

        /*
     const local = doc.data() as IMaterial;
          const id = doc.id;
          data.push({id,...local} as IMaterial);
        */
       
       


       /*
 const local = doc.data() as IProduct;
          const id = doc.id;
          data.push({id,...local} as IProduct);

       */

  //      this.firestore  doc.data() ["productMaterial"]
  // .collection("productmaterial", (ref) => ref.where("id", "==", data))
  // .snapshotChanges()
  // .subscribe((data) => {
  //   const myArray = [];
  //   data.forEach((doc) => {
  //     const y = doc.payload.doc.data()["altUID"];
  //     console.log(y);
  //     myArray.push(y);
  //   });
  //   console.log(myArray);
  // });

       /*
return this.firestore.collection('material').ref.get().then((querySnapshot)=>{
        const data: IMaterial[] =[];
        querySnapshot.forEach((doc)=> {
          const local = doc.data() as IMaterial;
          const id = doc.id;
          data.push({id,...local} as IMaterial);
        });
        this.subjectMaterial.next(data);
        localStorage.setItem('materials', JSON.stringify(data));
      });
       */
    
      }


      async getProducts(){
        const querySnapshot = await this.firestore.collection('product').ref.get();
        const data: IProduct[]  =[];
        querySnapshot.forEach((doc)=>{
          const local = doc.data() as IProduct;
          const id = doc.id;
          data.push({id,...local} as IProduct);
        });
        this.subjectProduct.next(data);
      }

    async getCategories(): Promise<ICategory[]>{

     const querySnapshot = await this.firestore.collection('category').ref.get();
      const data: ICategory[] = [];
      querySnapshot.forEach((doc) => {

        const local = doc.data() as ICategory;
        const id = doc.id;
        data.push({ id, ...local } as ICategory);

      });
      this.subject.next(data);
      localStorage.setItem('categories', JSON.stringify(data));
      return data;
    }



  addCategory(payload: ICategory):Promise<any>
  {
    return this.firestore.collection('category').add(payload).then(response =>{
      console.log("add item console:"+ response.id);
      
    }).catch(error=>{
      console.log("add item error:"+error)
    });

  }
  updateCategory(data:ICategory,id:any) {

  return  this.firestore.doc('category/' + id).update(data);
 }

 getlastInsertedCategoryRecord(){
  const data: ICategory[] = []
  let data1: ICategory;
  let lastrecord = this.firestore.collection<ICategory>('category', ref => ref.orderBy('categoryid', 'desc').limit(1)).snapshotChanges();

  

let c = lastrecord
  .subscribe((data) => {
    const myArray = [];
    data.forEach((doc) => {
      const y = doc.payload.doc.data() as ICategory;
      const docId = doc.payload.doc.id;
      data1  = y;
      data1.id = docId;
      
      return {docId,...y};
    });
    
  });

  

  console.log(` data1 is: ${data}`)

 
 }


  addMaterial(payload: IMaterial)
  {
    return this.firestore.collection('material').add(payload).then(response =>{
      console.log("add item console:"+ response.id);
    }).catch(error=>{
      console.log("add item error:"+error)
    });

  }

  deleteMaterial(data)
  {
    return this.firestore.collection("material").doc(data).delete();
  }
  updateMaterial(data:IMaterial,id:any) {
 
    //return this.firestore.collection("material").doc(data).update(data);

  return  this.firestore.doc('material/' + id).update(data);
 }
  
  getMaterialsWitId(){
    

  }

  addProduct(mainproduct,productrelation:IProductMat){
    return this.firestore.collection('product').add(mainproduct).then(response =>{
      this.NewProductId = response.id;
      console.log('added product id:'+this.NewProductId);

      // this.firestore.collection('productmaterials').add(productrelation).then(resp=>{
      //   console.log('addedd product materialid :'+resp.id);
      // }).catch(err=>{ console.log(err)})
      this.firestore.collection("productmaterial").doc(this.NewProductId).set(productrelation).then(resp=>{
        console.log('addedd product materialid :'+resp);
      }).catch(err=>{ console.log(err)})


    }).catch(error=>{
      console.log("add item error:"+error)
    });

  }


  getbyfield()
  {
    //return  this.firestore.doc('material/' + id).get()
 
  }

  IsCategoriesInLocalStorage():boolean{
    let num: number;
    let cat = JSON.parse(localStorage.getItem('categories')) as ICategory[];
    if(cat && cat.length>0){
    this.categories$ = of(cat);
    this.categories$.subscribe(result => {
      num= result.length ?? 0 });

      if(num>0) return true;
      else return false;
    }
    return false;
  }


  IsMaterialsInLocalStorage():boolean{
    let num: number;
    let mat  = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
    if(mat && mat.length>0){
    this.materials$ = of(mat);
    this.materials$.subscribe(result => {
      num = result.length
    });
  }
    if(num>0) return true;
    else return false;

    
  }
}

