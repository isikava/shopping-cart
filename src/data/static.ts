import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];

export const PRODUCTS_WOMEN = [
  {
    id: 101,
    title: 'Angels malu zip jeans slim black used',
    price: 139,
    description: 'Angels malu zip jeans slim black used',
    category: 'top women',
    image: 'img/dress1-340.webp',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 101,
    title: 'Angels malu zip jeans slim black used',
    price: 139,
    description: 'Angels malu zip jeans slim black used',
    category: 'top women',
    image: 'img/dress2-340.webp',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 101,
    title: 'Angels malu zip jeans slim black used',
    price: 139,
    description: 'Angels malu zip jeans slim black used',
    category: 'top women',
    image: 'img/dress3-340.webp',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 101,
    title: 'Angels malu zip jeans slim black used',
    price: 139,
    description: 'Angels malu zip jeans slim black used',
    category: 'top women',
    image: 'img/dress4-340.webp',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];

export const NAV_LINKS = [
  { name: 'Home', to: '/', id: 1 },
  { name: 'Shop', to: 'products', id: 2 },
  { name: 'Blog', to: 'components', id: 3 },
  { name: 'Checkout', to: 'checkout', id: 4 },
];

export const FEATURES = [
  { name: 'men' },
  { name: 'women' },
  { name: 'boys' },
  { name: 'girls' },
  { name: 'new arrivals' },
  { name: 'shoes' },
  { name: 'clothes' },
  { name: 'accessories' },
];

export const MENU = [
  { name: 'about us' },
  { name: 'contact us' },
  { name: 'my account' },
  { name: 'orders history' },
  { name: 'my wishlist' },
  { name: 'blog' },
  { name: 'login' },
];

interface IContact {
  name: string;
  link?: string | undefined;
}

export const CONTACTS: Record<string, IContact> = {
  address: { name: '123 Street name, City, England' },
  phone: { name: '(123) 456-7890', link: 'tel:1234567890' },
  email: { name: 'mail@example.com', link: 'mailto:mail@example.com' },
  'Working days/Hours': { name: 'Mon - Sun / 9:00AM - 8:00PM' },
};

export const SOCIALS = [
  { name: 'Facebook', icon: BiLogoFacebook },
  { name: 'Twitter', icon: BiLogoTwitter },
  { name: 'Instagram', icon: BiLogoInstagram },
];
