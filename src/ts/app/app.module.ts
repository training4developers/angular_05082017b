import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";

import "bootstrap-loader";
import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule, FormsModule, NgbModule.forRoot() ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
