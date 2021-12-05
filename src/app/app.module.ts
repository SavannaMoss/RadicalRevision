// MODULES
import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { NgbModule }                      from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }               from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule }               from './app-routing.module';

// SERVICES
import { InMemoryDataService } from "./services/in-memory-data.service";

// COMPONENTS
import { AppComponent }       from './app.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { DetailsComponent }   from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
