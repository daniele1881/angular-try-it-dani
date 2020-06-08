import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { productsConst } from "../productsConst";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {} //inietto la dipendenza dei service ActivatedRoute e CartService

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productsConst[params.get("productId")];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
}
