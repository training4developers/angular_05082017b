import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Color } from "../models/color";
import { ColorsService } from "../services/colors.service";

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

    // private colorsSvc: ColorsService;

    // constructor(colorsSvc: ColorsService) {
    //     this.colorsSvc = colorsSvc;
    // }

    public colors: Color[] = this.colorsSvc.getAll();

    constructor(
        private colorsSvc: ColorsService,
    ) { }


    public get colorNames() {
        return this.colors.map((color) => color.name);
    }

    public addColor(newColor: string) {
        this.colors = this.colorsSvc.append(newColor).getAll();
    }

}
