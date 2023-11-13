import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  // Product
  { path: 'product/product-catalogue', loadChildren: () => import('./components/pages/product/product-catalogue/product-catalogue.module').then(m => m.ProductCatalogueModule), data: { breadcrumb: "Product Catalogue" } },
  { path: 'product/product-list', loadChildren: () => import('./components/pages/product/product-list/product-list.module').then(m => m.ProductListModule), data: { breadcrumb: "Product List" } },
  { path: 'product/product-grid', loadChildren: () => import('./components/pages/product/product-grid/product-grid.module').then(m => m.ProductGridModule), data: { breadcrumb: "Product Grid" } },
  { path: 'product/add-product', loadChildren: () => import('./components/pages/product/add-product/add-product.module').then(m => m.AddProductModule), data: { breadcrumb: "Add Product" } },
  { path: 'product/product-detail/:id', loadChildren: () => import('./components/pages/product/product-detail/product-detail.module').then(m => m.ProductDetailModule), data: { breadcrumb: "Product Details" } },
  // Invoice
  { path: 'invoice/invoice-detail', loadChildren: () => import('./components/pages/invoice/invoice-detail/invoice-detail.module').then(m => m.InvoiceDetailModule), data: { breadcrumb: "Invoice Detail" } },
  { path: 'invoice/invoice-list', loadChildren: () => import('./components/pages/invoice/invoice-list/invoice-list.module').then(m => m.InvoiceListModule), data: { breadcrumb: "Invoice List" } },
  // Forms
  { path: 'form/form-elements', loadChildren: () => import('./components/pages/form/form-elements/form-elements.module').then(m => m.FormElementsModule), data: { breadcrumb: "Form Elements" } },
  { path: 'form/form-layouts', loadChildren: () => import('./components/pages/form/form-layouts/form-layouts.module').then(m => m.FormLayoutsModule), data: { breadcrumb: "Form Layouts" } },
  { path: 'form/form-validation', loadChildren: () => import('./components/pages/form/form-validation/form-validation.module').then(m => m.FormValidationModule), data: { breadcrumb: "Form Validation" } },
  { path: 'form/form-wizard', loadChildren: () => import('./components/pages/form/form-wizard/form-wizard.module').then(m => m.FormWizardModule), data: { breadcrumb: "Form Wizard" } },
  // Charts
  { path: 'charts/chartjs', loadChildren: () => import('./components/pages/charts/chartjs/chartjs.module').then(m => m.ChartjsModule), data: { breadcrumb: "Chart JS" } },
  { path: 'charts/google-charts', loadChildren: () => import('./components/pages/charts/google-charts/google-charts.module').then(m => m.GoogleChartsModule), data: { breadcrumb: "Google Charts" } },
  // Tables
  { path: 'tables/basic-tables', loadChildren: () => import('./components/pages/tables/basic-tables/basic-tables.module').then(m => m.BasicTablesModule), data: { breadcrumb: "Basic Tables" } },
  { path: 'tables/data-tables', loadChildren: () => import('./components/pages/tables/data-tables/data-tables.module').then(m => m.DataTablesModule), data: { breadcrumb: "Data Tables" } },
  // Dashboard
  { path: 'dashboard/web-analytics', loadChildren: () => import('./components/pages/dashboard/web-analytics/web-analytics.module').then(m => m.WebAnalyticsModule), data: { breadcrumb: "Web Analytics" } },
  { path: 'dashboard/project-management', loadChildren: () => import('./components/pages/dashboard/project-management/project-management.module').then(m => m.ProjectManagementModule), data: { breadcrumb: "Project Management" } },
  { path: 'dashboard/client-management', loadChildren: () => import('./components/pages/dashboard/client-management/client-management.module').then(m => m.ClientManagementModule), data: { breadcrumb: "Client Management" } },
  // Prebuilt-pages
  { path: 'prebuilt-pages/default-login', loadChildren: () => import('./components/pages/prebuilt-pages/default-login/default-login.module').then(m => m.DefaultLoginModule), data: { breadcrumb: "Default Login" } },
  { path: 'prebuilt-pages/modal-login', loadChildren: () => import('./components/pages/prebuilt-pages/modal-login/modal-login.module').then(m => m.ModalLoginModule), data: { breadcrumb: "Modal Login" } },
  { path: 'prebuilt-pages/default-register', loadChildren: () => import('./components/pages/prebuilt-pages/default-register/default-register.module').then(m => m.DefaultRegisterModule), data: { breadcrumb: "Default Register" } },
  { path: 'prebuilt-pages/modal-register', loadChildren: () => import('./components/pages/prebuilt-pages/modal-register/modal-register.module').then(m => m.ModalRegisterModule), data: { breadcrumb: "Modal Register" } },
  { path: 'prebuilt-pages/lock-screen', loadChildren: () => import('./components/pages/prebuilt-pages/lock-screen/lock-screen.module').then(m => m.LockScreenModule), data: { breadcrumb: "Lock Screen" } },
  { path: 'prebuilt-pages/coming-soon', loadChildren: () => import('./components/pages/prebuilt-pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: "Coming Soon" } },
  { path: 'prebuilt-pages/error', loadChildren: () => import('./components/pages/prebuilt-pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: "Error 404" } },
  { path: 'prebuilt-pages/faqs', loadChildren: () => import('./components/pages/prebuilt-pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  { path: 'prebuilt-pages/portfolio', loadChildren: () => import('./components/pages/prebuilt-pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: "Portfolio" } },
  { path: 'prebuilt-pages/user-profile', loadChildren: () => import('./components/pages/prebuilt-pages/user-profile/user-profile.module').then(m => m.UserProfileModule), data: { breadcrumb: "User Profile" } },
  { path: 'prebuilt-pages/invoice', loadChildren: () => import('./components/pages/prebuilt-pages/invoice/invoice.module').then(m => m.InvoiceModule), data: { breadcrumb: "Invoice" } },
  // Apps
  { path: 'apps/chat', loadChildren: () => import('./components/pages/apps/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: "Chat" } },
  { path: 'apps/email', loadChildren: () => import('./components/pages/apps/email/email.module').then(m => m.EmailModule), data: { breadcrumb: "Email" } },
  { path: 'apps/to-do-list', loadChildren: () => import('./components/pages/apps/to-do-list/to-do-list.module').then(m => m.ToDoListModule), data: { breadcrumb: "To-Do-List" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
