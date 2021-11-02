import { createAction} from '@ngrx/store'

export const loadAllProducts = createAction(
    "[Products Resolver] Load All Products"
);


export const allProductsLoaded = createAction(
    
    "[Load Products Effect] All Products Loaded"
);