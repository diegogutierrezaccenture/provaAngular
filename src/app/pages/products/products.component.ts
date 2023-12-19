import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

export const products = [
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Nestea',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    unitAvailable: 10,
    date: new Date('2023-12-18T09:31:08+0100'),
    price: 1.95,
    category: "Food"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    unitAvailable: 8,
    date: new Date('2023-12-19T12:45:00+0100'),
    price: 2.99,
    category: "Food"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 3',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    unitAvailable: 15,
    date: new Date('2023-12-20T15:22:30+0100'),
    price: 5.49
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 4',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    unitAvailable: 20,
    date: new Date('2023-12-21T18:10:45+0100'),
    price: 8.75,
    category: "Category"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 5',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    unitAvailable: 12,
    date: new Date('2023-12-22T21:05:20+0100'),
    price: 3.25
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 6',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    unitAvailable: 18,
    date: new Date('2023-12-23T09:12:55+0100'),
    price: 6.99,
    category: "Tech"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 7',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    unitAvailable: 25,
    date: new Date('2023-12-24T14:30:10+0100'),
    price: 4.50,
    category: "Food"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 8',
    description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    unitAvailable: 5,
    date: new Date('2023-12-25T17:18:35+0100'),
    price: 7.80
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 9',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    unitAvailable: 30,
    date: new Date('2023-12-26T20:45:50+0100'),
    price: 9.95,
    category: "Tech"
  },
  {
    image: 'https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?rs=1&pid=ImgDetMain',
    name: 'Product 10',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    unitAvailable: 7,
    date: new Date('2023-12-27T23:55:15+0100'),
    price: 11.20
  }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  title = 'PRODUCTES:';

  products: any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((response: any) => {
        this.products = response.products
      });
  }
}