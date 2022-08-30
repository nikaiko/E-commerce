const routes = {
  main: {
    createRoot: (): string => "/",
    mask: "/",
  },

  products: {
    createRoot: (): string => "/products",
    mask: "products",

    detail: {
      createRoot: (id: string): string => `/products/${id}`,
      mask: "products/:id",
    },
  },

  other: {
    createRoot: (): string => "*",
    mask: "*",
  },
};

export default routes;
