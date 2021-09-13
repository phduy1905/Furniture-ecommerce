export const formatNumber = (number) => {
  let dollars = number / 100;
  dollars = dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollars;
};

export const getUniqueValues = (list, name) => {
  let unique = list.map((item) => item[name]);
  if (name === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};

export const paginate = (products) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({ length: pages }, (_, idx) => {
    const start = idx * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });

  return newProducts;
};

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
