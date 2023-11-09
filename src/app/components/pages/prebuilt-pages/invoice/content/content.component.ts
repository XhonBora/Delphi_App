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
      productname: 'HTML 5 Template',
      qty: 1,
      cost: 30
    },
    {
      id: 2,
      productname: 'Wordpress Template',
      qty: 1,
      cost: 69
    },
    {
      id: 3,
      productname: 'PSD Template',
      qty: 2,
      cost: 19
    },
    {
      id: 4,
      productname: 'Code Snipper',
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
