import { Component, OnInit } from '@angular/core';
import data from '../../../../../data/menu.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // Table
  public data = data;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }
  source: LocalDataSource;
  settings = {
    hideSubHeader: true,
    pager: {
      perPage: 10,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        title: 'Id',
        filter: true,
      },
      name: {
        title: 'Title',
        filter: true,
      },
      qty: {
        title: 'Quantity',
        type: 'html',
        valuePrepareFunction: (qty: number) => {
          return `<span>${new Intl.NumberFormat().format(qty)}</span>`;
        },
        filter: true,
      },
      price: {
        title: 'Price',
        type: 'html',
        valuePrepareFunction: (price: number) => {
          return `<span>€${new Intl.NumberFormat().format(price)}</span>`;
        },
        filter: true,
      },
    },
  };

  onSearch(query: string = '') {
    const filter = [
      { field: 'id', search: query },
      { field: 'name', search: query },
      { field: 'qty', search: query },
      { field: 'price', search: query },
    ];

    if (query.trim() === '') {
      this.removeFilter();
    } else {
      this.source.setFilter(filter, false);
    }
  }

  removeFilter() {
    this.source.reset();
  }

  ngOnInit(): void {}
}
