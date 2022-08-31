import ProductModel from "@store/models/ProductModel";
import Meta from "@utils/meta";
import { makeObservable, observable } from "mobx";

class ProductStore {
  _products: ProductModel[] = [];
  _selectedProduct: ProductModel | null = null;
  _meta: Meta = Meta.initial;

  constructor() {
    makeObservable(this, {
      _products: observable,
      _meta: observable,
    });
  }

  _setProducts(products: ProductModel[]) {
    this._products = products;
  }

  _setSelectedProduct(product: ProductModel) {
    this._selectedProduct = product;
  }

  get products() {
    return this._products;
  }

  get selectedProduct() {
    return this._selectedProduct;
  }
}

export default ProductStore;
