import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
   racesCollection: AngularFirestoreCollection<IMaterial>;

  constructor(private firestore: AngularFirestore) { }


  getMaterials(){
    return this.firestore.collection('material').snapshotChanges();
  }

  addMaterial(payload: IMaterial)
  {
    return this.firestore.collection('material').add(payload);
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