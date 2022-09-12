import ApiStore from "@store/ApiStore";
import ProductModel from "@store/models/ProductModel";
import rootStore from "@store/RootStore";
import log from "@utils/log";
import Meta from "@utils/meta";
import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";

type PrivateFields =
  | "_meta"
  | "_products"
  | "_totalCount"
  | "_page"
  | "_pageSize";

export default class ProductsStore {
  private _products: ProductModel[] = [];
  private _meta: Meta = Meta.initial;
  private _totalCount = 0;
  private _page = 1;
  private _pageSize = 6;

  constructor() {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable.ref,
      _meta: observable,
      _totalCount: observable,
      _page: observable,
      _pageSize: observable,
      products: computed,
      meta: computed,
      totalCount: computed,
      pageSize: computed,
      getProducts: action.bound,
    });

    reaction(
      () => {
        const title = rootStore.query.getParam("title");
        const page = rootStore.query.getParam("page");
        log("title: ", title, " page: ", page);

        return { title, page };
      },
      ({ title, page }) => {
        page
          ? this.getProducts(title?.toString(), +page)
          : this.getProducts(title?.toString());
      }
    );
  }

  async getProducts(title?: string, page?: number) {
    this._meta = Meta.loading;
    this._products = [];
    this._totalCount = 0;
    this._page = page || 1;

    const response = await ApiStore.fetchProducts(title);

    runInAction(() => {
      if (response.isError) {
        this._meta = Meta.error;
        return;
      }

      this._meta = Meta.success;
      this._products = response.data;
      this._totalCount = response.data.length;
    });
  }

  get products() {
    const firstPageIndex = (this._page - 1) * this._pageSize;
    const lastPageIndex = firstPageIndex + this._pageSize;
    return this._products.slice(firstPageIndex, lastPageIndex);
  }

  get meta() {
    return this._meta;
  }

  get totalCount() {
    return this._totalCount;
  }

  get pageSize() {
    return this._pageSize;
  }

  destroy(): void {}
}
