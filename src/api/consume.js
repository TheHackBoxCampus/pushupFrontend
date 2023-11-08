let uri = "https://654b787c5b38a59f28ef218e.mockapi.io/products";

const getProducts = async () => {
  let collection = []
  for(let i = 0; i < 6; i++) {
    const request = await fetch(uri);
    const response = await request.json();
    collection.push(response[i])
  }
  return collection;
};

export { getProducts };
