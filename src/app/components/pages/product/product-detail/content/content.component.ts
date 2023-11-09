import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import product from '../../../../../data/menu.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public productdetails = product;
  public setProduct(id: any) { 
    this.productdetails = product.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setProduct(this.router.snapshot.params.id);
  }

}
