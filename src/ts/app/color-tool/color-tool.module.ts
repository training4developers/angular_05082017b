import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ColorToolComponent } from "./components/color-tool.component";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ColorToolComponent ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
