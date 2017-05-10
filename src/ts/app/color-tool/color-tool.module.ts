import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ColorToolComponent } from "./components/color-tool.component";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule ],
    declarations: [ ColorToolComponent, CapitalizePipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
