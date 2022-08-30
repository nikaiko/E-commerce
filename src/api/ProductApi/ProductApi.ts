import IProduct from "@entities/IProduct";

import { $api } from "../index";

export default class ProductApi {
  static fetchProducts = async () => {
    const { data } = await $api.get<IProduct[]>("/products");
    return data;
  };

  static fetchProductsByCategory = async (category: string) => {
    const { data } = await $api.get<IProduct[]>(
      `/products/category/${category}`
    );
    return data;
  };

  static fetchProduct = async (id: string | undefined) => {
    const { data } = await $api.get<IProduct>(`/products/${id}`);
    return data;
  };
}
