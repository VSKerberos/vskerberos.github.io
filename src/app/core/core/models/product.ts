
export interface IProduct{

}

export interface IProductMaterial{
id?:string;
materialid:string;
quantity:string;
remarks:string;
unit:string;
materialname:string;
unitprice:string;
total:number;
categoryid:string;
categoryname:string;

}

export * from './product';