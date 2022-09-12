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

  services: {
    createRoot: (): string => "/services",
    mask: "/services",
  },

  article: {
    createRoot: (): string => "/article",
    mask: "/article",
  },

  about: {
    createRoot: (): string => "/about",
    mask: "/about",
  },

  profile: {
    createRoot: (): string => "/profile",
    mask: "/profile",
  },

  basket: {
    createRoot: (): string => "/basket",
    mask: "/basket",
  },

  other: {
    createRoot: (): string => "*",
    mask: "*",
  },
};

export default routes;
