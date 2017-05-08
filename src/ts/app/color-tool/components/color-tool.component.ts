import { Component } from "@angular/core";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            <li *ngFor="let color of colors">{{color.name}}</li>
        </ul>
    `,
})
export class ColorToolComponent {

    public colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

}
