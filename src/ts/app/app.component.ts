import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `{{message}}`,
})
export class AppComponent {

    public message: string = "Hello World!";
}
