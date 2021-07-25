import allProducts from '../../../products.json';

export const initialState = {
  products: allProducts,
  sortBy: null,
  filterBySize: [],
  filterByBrand: [],
  filterByIdealFor: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_SIZE':
      const isSizePresent = state.filterBySize.includes(action.payload);

      return {
        ...state,
        filterBySize: isSizePresent ? state.filterBySize.filter((size) => size !== action.payload) : [...state.filterBySize, action.payload],
      };

    case 'FILTER_BY_BRAND':
      const isBrandPresent = state.filterByBrand.includes(action.payload);

      return {
        ...state,
        filterByBrand: isBrandPresent ? state.filterByBrand.filter((brand) => brand !== action.payload) : [...state.filterByBrand, action.payload],
      };

    case 'FILTER_BY_IDEAL_FOR':
      const isIdealForPresent = state.filterByIdealFor.includes(action.payload);

      return {
        ...state,
        filterByIdealFor: isIdealForPresent ? state.filterByIdealFor.filter((idealFor) => idealFor !== action.payload) : [...state.filterByIdealFor, action.payload],
      };

    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'CLEAR_ALL_FILTERS':
      return {
        ...state,
        sortBy: null,
        filterBySize: [],
        filterByBrand: [],
        filterByIdealFor: [],
      };

    default:
      return state;
  }
};
