import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input()
  product: product;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let elem: HTMLElement = this.element.nativeElement.querySelector(".image-container");
    elem.style.backgroundImage = "url(../../assets/" + this.parseCategory() + ".jpg)"
  }

  openLink() {
    window.open(this.product.url, "_blank");
  }

  parseCategory() {
    let electronics = ["Gifts & Registry", "Electronics", "TV & Video", "Computers", "Cell Phones", "Wearable Tech", "iPad & Tablets", "Home Audio & Theater", "Video Games", "Portable Audio", "Cameras & Camcorders", "Smart Home"]
    let fashion = ["Fashion", "Featured Brands", "Women", "Men", "Clothing", "Jewelry"]
    let baby = ["Baby", "Baby Registry", "Car Seats", "Strollers", "Nursery", "Baby & Toddler Toys", "Diapering", "Feeding"]
    let pets = ["Pets", "Pet Supplies"]
    let beauty = ["Beauty", "Premium Beauty"]
    let personal_care = ["Personal Care", "Oral Care", "Shave", "Bath & Body", "Health"]
    let arts_crafts_sewing = ["Arts, Crafts & Sewing", "Feature"]

    if(electronics.indexOf(this.product.category) != -1) {
      return "electronics";
    } else if(fashion.indexOf(this.product.category) != -1) {
      return "fashion";
    } else if(baby.indexOf(this.product.category) != -1) {
      return "baby";
    } else if(pets.indexOf(this.product.category) != -1) {
      return "pets";
    } else if(personal_care.indexOf(this.product.category) != -1) {
      return "personal_care";
    } else if(arts_crafts_sewing.indexOf(this.product.category) != -1) {
      return "arts_crafts_sewing";
    }

    return this.product.category.toLowerCase();
  }

  onRate(event) {
    // Do nothing
  }

}
