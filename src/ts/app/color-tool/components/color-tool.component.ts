import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <ul>
            <li *ngFor="let color of colors">{{color.name}}</li>
        </ul>
        <form novalidate [formGroup]="newColorForm">
            <div>
                <label for="new-color-input">New Color:</label>
                <input type="text" id="new-color-input"
                    formControlName="newColorInput">
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
})
export class ColorToolComponent {

    public toolHeader = "Color Tool!";

    public newColorForm = new FormGroup({
        newColorInput: new FormControl(""),
    });

    public newColor = "";

    public colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

    public addColor() {

        const nextId = this.colors.reduce(
            (maxId, nextColor) => Math.max(maxId, nextColor.id), 0 ) + 1;

        console.log(this.newColorForm.value);

        this.colors = this.colors.concat({
            id: nextId,
            name: this.newColorForm.value.newColorInput,
        });

        this.newColor = "";

    }

}
