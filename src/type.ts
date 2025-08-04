export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
export interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}


export type themeType = "theme1" | "theme2" | "theme3";