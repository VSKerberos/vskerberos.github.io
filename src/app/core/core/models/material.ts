export interface IMaterial{
    id?:string;
    orderno:number;
    operationdate:string;
    name:string;
    unit:string;
    price:string;
    remarks:string;
    groupcode:number;
    grouptext?:string;
  }
  export * from './material';