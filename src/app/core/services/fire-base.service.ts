import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, shareReplay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
   racesCollection: AngularFirestoreCollection<IMaterial>;

  constructor(private firestore: AngularFirestore) { }


  getMaterials(){
    return this.firestore.collection('material').snapshotChanges().pipe(
      shareReplay()
    );

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

export interface IMaterial{
  id?:string;
  dimension:string;
  name:string;
  price:string;
  remarks:string;
  unit:string;
  updatedate:string;
  weight:string;

}