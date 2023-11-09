import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogueComponent } from './product-catalogue.component';

const routes: Routes = [{ path: '', component: ProductCatalogueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCatalogueRoutingModule { }
