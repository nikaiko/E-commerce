import ApiStore from "@store/ApiStore";
import ProductModel from "@store/models/ProductModel";
import Meta from "@utils/meta";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_meta" | "_products";

export default class ProductsStore {
  private _products: ProductModel[] = [];
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable.ref,
      _meta: observable,
      products: computed,
      meta: computed,
      getProducts: action,
    });
  }

  async getProducts() {
    this._meta = Meta.loading;
    this._products = [];

    const response = await ApiStore.fetchAllProducts();

    if (response.isError) {
      this._meta = Meta.error;
      return;
    }

    runInAction(() => {
      this._meta = Meta.success;
      this._products = response.data;
    });
  }

  get products() {
    return this._products;
  }

  get meta() {
    return this._meta;
  }

  destroy(): void {}
}
