import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ColorToolComponent } from "./components/color-tool.component";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ColorToolComponent, CapitalizePipe ],
    exports: [ ColorToolComponent ],
})
export class ColorToolModule { }
