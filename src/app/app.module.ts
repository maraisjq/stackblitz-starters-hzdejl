import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from "./core/layout/footer.component";
import { HeaderComponent } from "./core/layout/header.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FooterComponent,
    HeaderComponent,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}