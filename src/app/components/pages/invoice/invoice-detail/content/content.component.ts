import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  invoiceproductlist = [
    {
      id: 1,
      productname: 'Grilled Sandwich',
      qty: 1,
      cost: 30
    },
    {
      id: 2,
      productname: 'Fried Egg Sandwich',
      qty: 1,
      cost: 69
    },
    {
      id: 3,
      productname: 'Spicy Grilled Burger',
      qty: 2,
      cost: 19
    },
    {
      id: 4,
      productname: 'Peri Peri Fries',
      qty: 2,
      cost: 9
    },
  ];
  public calculateprice() {
    return this.invoiceproductlist.reduce((subtotal, item) => subtotal + item.qty * item.cost, 0)
  };

  ngOnInit(): void {
  }

}
