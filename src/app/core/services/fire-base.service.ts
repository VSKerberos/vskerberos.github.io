import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/internal/operators';
import {ICategory} from '../core/models/category'
import {IMaterial} from '../core/models/material'


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

  getMaterialsByObject(){
    return this.firestore.collection('material').ref.get()
    .then((querySnapshot)=> {
      const data: IMaterial[] = [];
      querySnapshot.forEach((doc)=>{
        data.push(doc.data() as IMaterial );
        console.log(doc.id, " => ", doc.data());
        let d = doc.data() as IMaterial;
        console.log(d.name);
        
      })
      //this._mechanics.next(data);
    });
      
      
      
  }

  deleteCategorie(data)
  {
    return this.firestore.collection("category").doc(data).delete();
  }

  getMaterials(){
    return this.firestore.collection('material').snapshotChanges().pipe(
      shareReplay()
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
      })
  
      }


    getCategories(){

     return this.firestore.collection('category').ref.get().then((querySnapshot)=>{
        const data: ICategory[] = [];
        querySnapshot.forEach((doc)=> {

           const local = doc.data() as ICategory;
          const id = doc.id;
          data.push({ id, ...local }  as ICategory);

        });
        this.subject.next(data);
        localStorage.setItem('categories', JSON.stringify(data));
      } )
      
        




      /*

  getMaterials = () =>   {  
   this.spinnerService.display(true);
      this.firebaseService
      .getMaterials()
      .subscribe(res =>( 
      this.dataSource=res, 
        console.log(res),
        this.spinnerService.display(false),
        shareReplay()
        
        ))
        console.log("materialList: "+ this.materialList);
      };





fetchMechanics() {

  return this.firestore
    .collection("users")
    .ref
    .where("isMechanic", "==", false)
    .get().then((querySnapshot) => {
        const data: UserData[] = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data() as UserData);
            console.log(doc.id, " => ", doc.data());
        });
        this._mechanics.next(data)
    });
      */
    }

 

    
 
  
/*
fetchMechanics() {

  return this.firestore
    .collection("users")
    .ref
    .where("isMechanic", "==", false)
    .get().then((querySnapshot) => {
        const data: UserData[] = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data() as UserData);
            console.log(doc.id, " => ", doc.data());
        });
        this._mechanics.next(data)
    });

}

*/


    /*
  loadItems() {
    this.firestore.collection('People', ref => ref
      .limit(5)
      .orderBy('timestamp', 'desc')
    ).snapshotChanges()
      .subscribe(response => {
        ...
        ...
      }, error => {
      });
  }

    */
  

  addCategory(payload: ICategory)
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
}

