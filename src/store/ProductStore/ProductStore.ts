import IProduct from "@entities/IProduct";

class ProductStore {
  _selectedProduct = {} as IProduct;
  _products = [] as IProduct[];

  setProducts(products: IProduct[]) {
    this._products = products;
  }

  setSelectedProduct(product: IProduct) {
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
