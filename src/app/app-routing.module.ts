import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TodoComponent } from "./todo/todo.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: "about", component: AboutComponent },
  { path: "todo", component: TodoComponent },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: "**", redirectTo: "", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
