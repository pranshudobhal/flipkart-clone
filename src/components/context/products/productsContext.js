import { createContext, useContext, useReducer } from 'react';
import { initialState, productsReducer } from './productsReducer';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return <ProductContext.Provider value={{ products: state.products, sortBy: state.sortBy, filterBySize: state.filterBySize, filterByBrand: state.filterByBrand, filterByIdealFor: state.filterByIdealFor, productsDispatch: dispatch }}>{children}</ProductContext.Provider>;
};

export const useProductFilters = () => {
  return useContext(ProductContext);
};
