import apiUrls from "@configs/apiUrls";
import ApiResp from "@utils/apiTypes";
import log from "@utils/log";
import axios from "axios";

import ProductModel from "../models/ProductModel/ProductModel";

export const requestAllProducts = async (): Promise<
  ApiResp<ProductModel[]>
> => {
  try {
    const response = await axios(apiUrls.products.all);
    return {
      isError: false,
      data: response.data,
    };
  } catch (e) {
    log(e);
    return {
      isError: true,
      data: null,
    };
  }
};

export const requestSingleProduct = async (
  id?: string
): Promise<ApiResp<ProductModel>> => {
  try {
    const response = await axios(apiUrls.products.single(id));
    return {
      isError: false,
      data: response.data,
    };
  } catch (e) {
    log(e);
    return {
      isError: true,
      data: null,
    };
  }
};

export const requestProductsFromCategory = async (
  category?: string
): Promise<ApiResp<ProductModel[]>> => {
  try {
    const response = await axios(apiUrls.products.fromCategory(category));
    return {
      isError: false,
      data: response.data,
    };
  } catch (e) {
    log(e);
    return {
      isError: true,
      data: null,
    };
  }
};
