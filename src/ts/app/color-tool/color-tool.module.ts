import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ColorToolComponent } from "./components/color-tool.component";
import { ColorFormComponent } from "./components/color-form.component";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule ],
    declarations: [ ColorToolComponent, ColorFormComponent, CapitalizePipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
