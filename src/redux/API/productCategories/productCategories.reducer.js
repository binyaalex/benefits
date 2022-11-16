import { ProductCategoryActionsTypes } from "./productCategories.types";

const INITIAL_STATE = {
  isProductCategoriesPending: false,
  productCategories: [],
  productCategoriesError: null,

  isProductCategoryPending: false,
  productCategory: {},
  productCategoryError: null,

  isProductsCategoryPending: false,
  productsCategory: [],
  productsCategoryError: null,
};

const ProductCategoryReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_PENDING:
      return {
        ...state,
        isProductCategoriesPending: true,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        isProductCategoriesPending: false,
        productCategories: action.payload,
        productCategoriesError: null,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_ERROR:
      return {
        ...state,
        isProductCategoriesPending: false,
        productCategoriesError: action.payload,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_BY_ID_PENDING:
      return {
        ...state,
        isProductCategoryPending: true,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        isProductCategoryPending: false,
        productCategory: action.payload,
        productCategoryError: null,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCT_CATEGORY_BY_ID_ERROR:
      return {
        ...state,
        isProductCategoryPending: false,
        productCategoryError: action.payload,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCTS_BY_CATEGORY_ID_PENDING:
      return {
        ...state,
        isProductsCategoryPending: true,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCTS_BY_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        isProductsCategoryPending: false,
        productsCategory: action.payload,
        productsCategoryError: null,
      };

    case ProductCategoryActionsTypes.GET.GET_PRODUCTS_BY_CATEGORY_ID_ERROR:
      return {
        ...state,
        isProductsCategoryPending: false,
        productsCategoryError: action.payload,
      };

    default:
      return state;
  }
};

export default ProductCategoryReducer;
