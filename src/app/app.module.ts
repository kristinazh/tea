import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from "./views/products/products.module";
import {MainModule} from "./views/main/main.module";
import {OrderModule} from "./views/order/order.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {HeaderComponent} from "./shared/layout/header/header.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    MainModule,
    OrderModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
