
export interface IProduct{

    id?:string;
    name:string;
    code:string;
    operationDate:string;
}

export interface IProductMaterial{
id?:string;
materialid:string;
quantity:string;
remarks:string;
unit:string;
materialname:string;
materialdate?:string;
unitprice:string;
total:number;
categoryid:string;
categoryname:string;
}

export interface IProductMat {

    productMaterial:IProductMaterial[]
}

export * from './product';