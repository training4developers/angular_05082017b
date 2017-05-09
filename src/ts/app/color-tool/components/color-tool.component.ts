import { Component, DoCheck } from "@angular/core";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            <li *ngFor="let color of colors">{{color.name | capitalize:34}}</li>
        </ul>
        <form novalidate>
            <div>
                <label for="new-color-input">New Color:</label>
                <input type="text" id="new-color-input"
                    name="newColorInput" [(ngModel)]="newColor"
                    required #newColorInputRef="ngModel">
                <span>*</span>
                <span>
                    Please enter a new color before trying to add.
                </span>
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
    styles: [
        "input.ng-invalid.ng-touched { border: 1px solid red; }",
        "input + span { float: left; }",
        "input ~ span { display:none; }",
        "input.ng-invalid.ng-touched ~ span { display:inline; }",
    ],
})
export class ColorToolComponent implements DoCheck {

    public newColor = "";

    public colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

    public ngDoCheck() {
        console.log("change detection cycle executed");
    }

    public addColor() {

        const nextId = this.colors.reduce(
            (maxId, nextColor) => Math.max(maxId, nextColor.id), 0 ) + 1;

        console.log(nextId);

        this.colors = this.colors.concat({
            id: nextId,
            name: this.newColor,
        });

        this.newColor = "";

    }

}
