import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ColorToolComponent } from "./components/color-tool.component";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ ColorToolComponent, CapitalizePipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
