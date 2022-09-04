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

    reaction(
      () => {
        const title = rootStore.query.getParam("title");
        const page = rootStore.query.getParam("page");
        return { title, page };
      },
      ({ title, page }) => {
        this.getProducts(title?.toString());
        log("array products after reaction: ", this.products);
      }
    );
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
    // this._qpReaction();
  }

  // private readonly _qpReaction: IReactionDisposer = reaction(
  //   () => {
  //     const title = rootStore.query.getParam("title");
  //     const page = rootStore.query.getParam("page");
  //     return { title, page };
  //   },
  //   ({ title, page }) => {
  //     this.getProducts(title?.toString());
  //     log("array products after reaction: ", this.products);
  //   }
  // );
}
