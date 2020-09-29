export const getProducstByName = (productsList, description = "") => {
  if (description === "") {
    return [];
  }
  description = description.toLocaleLowerCase();
  return productsList.filter((product) =>
    product.description.toLocaleLowerCase().includes(description)
  );
};
