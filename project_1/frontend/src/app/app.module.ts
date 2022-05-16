import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './shared/services/cart.service';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { LoginGuardsGuard } from './shared/guards/login-guards.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    ShippingComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryComponent,
    ProductAlertsComponent,
    ProductFilterComponent,
    SearchFilterPipe,
    NotFoundComponent,
    FeedbackDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CartService,
    ProductService,
    CategoryService,
    LoginGuardsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
