import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from 'src/app/core/core/models/category';
import { IMaterial } from 'src/app/core/core/models/material';
@Pipe({
 name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
   transform(value: IMaterial, args?: any): string {
    let x:string;
    if(value && value.groupcode != undefined){
        x='if';
        let cats = JSON.parse(localStorage.getItem('categories')) as ICategory[];
        if(cats!=null && cats.length>0)
        x= cats.find(x=>x.categoryid == value.groupcode).title;
        

        
    }
        else { x='tanımsız kategori';}


        return x;
   }
}