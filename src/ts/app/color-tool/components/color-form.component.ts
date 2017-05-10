import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "color-form",
    template: `<form novalidate [formGroup]="newColorForm">
        <div>
            <label for="new-color-input">New Color:</label>
            <input type="text" id="new-color-input"
                formControlName="newColorInput">
        </div>
        <button type="button" (click)="saveColor()">Add Color</button>
    </form>`,
})
export class ColorFormComponent {

    public newColorForm = new FormGroup({
        newColorInput: new FormControl(""),
    });

    @Output()
    public onSaveColor = new EventEmitter<string>();

    public saveColor() {
        this.onSaveColor.emit(this.newColorForm.value.newColorInput);
    }

}
