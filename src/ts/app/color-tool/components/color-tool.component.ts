import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Color } from "../models/color";

@Component({
    selector: "color-tool",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <unordered-list [listItems]="colorNames"></unordered-list>
        <color-form (onSaveColor)="addColor($event)"></color-form>
    `,
})
export class ColorToolComponent {

    public toolHeader = "Color Tool!";



    public newColor = "";

    public colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

    public get colorNames() {
        return this.colors.map((color) => color.name);
    }

    public addColor(newColor: string) {

        const nextId = this.colors.reduce(
            (maxId, nextColor) => Math.max(maxId, nextColor.id), 0 ) + 1;

        this.colors = this.colors.concat({
            id: nextId,
            name: newColor,
        });
    }

}
