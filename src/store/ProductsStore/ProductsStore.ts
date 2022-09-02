import ApiStore from "@store/ApiStore";
import ProductModel from "@store/models/ProductModel";
import rootStore from "@store/RootStore";
import log from "@utils/log";
import Meta from "@utils/meta";
import {
  action,
  computed,
  IReactionDisposer,
  makeObservable,
  observable,
  reaction,
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
      getProducts: action.bound,
    });
  }

  async getProducts(query?: string) {
    this._meta = Meta.loading;
    this._products = [];

    const response = await ApiStore.fetchAllProducts();

    runInAction(() => {
      if (response.isError) {
        this._meta = Meta.error;
        return;
      }

      log("query ", query);
      this._meta = Meta.success;
      this._products = query
        ? response.data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        : response.data;
    });
  }

  get products() {
    return this._products;
  }

  get meta() {
    return this._meta;
  }

  destroy(): void {
    this._qpReaction();
  }

  private readonly _qpReaction: IReactionDisposer = reaction(
    () => rootStore.query.getParam("search"),
    (search) => {
      log("search value change", search);
      this.getProducts(search?.toString());
      log(this._products);
    }
  );
}
