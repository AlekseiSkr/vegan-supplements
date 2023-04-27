import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'products', loadChildren: () => ProductsModule },
  { path: 'cart', loadChildren: () => CartModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
