import ProductModel from "@models/ProductModel";
import ApiStore from "@store/ApiStore";
import Meta from "@utils/meta";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_relatedProducts" | "_currentProduct" | "_meta";

export default class ProductDetailStore {
  private _relatedProducts: ProductModel[] = [];
  private _currentProduct: ProductModel | null = null;
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<ProductDetailStore, PrivateFields>(this, {
      _relatedProducts: observable.ref,
      _currentProduct: observable.ref,
      _meta: observable,
      meta: computed,
      currentProduct: computed,
      relatedProducts: computed,
      getProducts: action,
    });
  }

  getProducts = async (id?: string) => {
    this._meta = Meta.loading;
    this._currentProduct = null;

    const respProduct = await ApiStore.fetchSingleProduct(id);
    const respProductsFromCategory = await ApiStore.fetchProductsFromCategory(
      respProduct.data.category
    );

    runInAction(() => {
      if (respProduct.isError || respProductsFromCategory.isError) {
        this._meta = Meta.error;
        return;
      }
      this._meta = Meta.success;
      this._currentProduct = respProduct.data;
      this._relatedProducts = respProductsFromCategory.data.filter(
        (product: ProductModel) => product.id !== respProduct.data.id
      );
    });
  };

  get relatedProducts() {
    return this._relatedProducts;
  }

  get meta() {
    return this._meta;
  }

  get currentProduct() {
    return this._currentProduct;
  }

  destroy(): void {}
}
