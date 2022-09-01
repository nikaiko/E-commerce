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

type PrivateFields = "_relatedProducts" | "_product" | "_meta";

export default class ProductDetailStore {
  private _relatedProducts: ProductModel[] = [];
  private _product: ProductModel | null = null;
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<ProductDetailStore, PrivateFields>(this, {
      _relatedProducts: observable,
      _product: observable,
      _meta: observable,
      meta: computed,
      product: computed,
      relatedProducts: computed,
      getProduct: action,
    });
  }

  async getProduct(id: string | undefined) {
    this._meta = Meta.loading;
    this._product = null;

    const respProduct = await ApiStore.fetchSingleProduct(id);
    const respRelated = await ApiStore.fetchProductsFromCategory(
      respProduct.data.category
    );

    if (respProduct.isError) {
      this._meta = Meta.error;
      return;
    }

    runInAction(() => {
      this._meta = Meta.success;
      this._product = respProduct.data;
      this._relatedProducts = respRelated.data;
    });
  }

  get relatedProducts() {
    return this._relatedProducts;
  }

  get meta() {
    return this._meta;
  }

  get product() {
    return this._product;
  }

  destroy(): void {}
}
