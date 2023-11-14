export interface ProductData {
  products: Product[];
  count: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export const getProductData = async (): Promise<ProductData> => {
  const response = await fetch(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=DESC'
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
