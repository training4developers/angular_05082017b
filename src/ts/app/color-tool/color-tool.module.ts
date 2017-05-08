import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColorToolComponent } from "./components/color-tool.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ColorToolComponent ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
