const api = (endpoint: string): string =>
  `https://fakestoreapi.com/${endpoint}`;

const apiUrls = {
  products: {
    all: api("products"),
    single: (id?: string): string => api(`products/${id}`),
    fromCategory: (category?: string): string =>
      api(`products/category/${category}`),
  },
};

export default apiUrls;
