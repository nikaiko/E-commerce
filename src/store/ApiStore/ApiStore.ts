import apiUrls from "@configs/apiUrls";
import ProductModel from "@models/ProductModel";
import ApiResponse from "@utils/apiTypes";
import axios from "axios";

export default class ApiStore {
  static async fetchProducts(
    title?: string
  ): Promise<ApiResponse<ProductModel[]>> {
    try {
      const response = await axios(apiUrls.products.all);

      if (!response.data) {
        throw new Error();
      }

      return {
        isError: false,
        data: title
          ? response.data.filter((item: ProductModel) =>
              item.title.toLowerCase().includes(title.toLowerCase())
            )
          : response.data,
      };
    } catch (e) {
      return {
        isError: true,
        data: null,
      };
    }
  }

  static async fetchSingleProduct(
    id: string | undefined
  ): Promise<ApiResponse<ProductModel>> {
    try {
      const response = await axios(apiUrls.products.single(id));

      if (!response.data) {
        throw new Error();
      }

      return {
        isError: false,
        data: response.data,
      };
    } catch (e) {
      return {
        isError: true,
        data: null,
      };
    }
  }

  static async fetchProductsFromCategory(
    category: string | undefined
  ): Promise<ApiResponse<ProductModel[]>> {
    try {
      const response = await axios(apiUrls.products.fromCategory(category));

      if (!response.data) {
        throw new Error();
      }

      return {
        isError: false,
        data: response.data,
      };
    } catch (e) {
      return {
        isError: true,
        data: null,
      };
    }
  }
}
