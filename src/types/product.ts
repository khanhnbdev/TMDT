export type Product = {
  name: string;
  price: number;
  image: string;
  quantity?: number;
  hasColors?: boolean;
  photos?: { src: string; label: string }[];
};
