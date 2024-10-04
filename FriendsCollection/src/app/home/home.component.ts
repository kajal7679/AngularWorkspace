import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = [
    {
      name: 'Stylish Shirt',
      price: 29.99,
      image: 'assets/images/shirt1.jpg',
    },
    {
      name: 'Comfortable Trousers',
      price: 49.99,
      image: 'assets/images/trousers1.jpg',
    },
    {
      name: 'Trendy Sneakers',
      price: 79.99,
      image: 'assets/images/sneakers1.jpg',
    },
    {
      name: 'Casual Jacket', // New product added
      price: 89.99,
      image: 'assets/images/jacket1.jpg', // Ensure you have this image
    },
  ];

  addToCart(product: any) {
    console.log(`Added to cart: ${product.name}`);
  }

  goToSignUp() {
    console.log('Navigating to sign-up page...');
  }
}
