import { 
  getProductsSuccess, 
  getProductsError, 
  filterProductsSuccess, 
  filterProductsError 
} from './actions';

export interface State {
products: Product[],
}

interface Handler {
  [key: string]: (state: State, payload?: any) => State;
}

export interface Param {
  name: 'string',
  value: 'string',
}

export interface Product {
  availability: boolean;
  code: number;
  id: number;
  imgUrl: string;
  inComparsion: boolean;
  inFav: boolean;
  link: string;
  params: Param[];
  title: string;
}

const initialState: State = {
  products: [],
};

const HANDLERS: any = {
  [getProductsSuccess as any]: (state: State, action: any) => {
    return { 
    ...state,
    products:action.products,
    }
  },
  [getProductsError as any]: (state: State) => ({

  }),
  [filterProductsSuccess as any]: (state: State, action: any) => {
    return { 
    ...state,
    products:action.products,
    }
  },
  [filterProductsError as any]: (state: State) => ({

  }),

};

export default (state = initialState, action: Action) => {
  const { type, payload } = action;
  const handler = HANDLERS[type];
  return handler ? handler(state, payload) : state;
}