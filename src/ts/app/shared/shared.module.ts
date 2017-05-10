import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToolHeaderComponent } from "./components/tool-header.component";
import { UnorderedListComponent } from "./components/unordered-list.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ToolHeaderComponent, UnorderedListComponent ],
    exports: [ ToolHeaderComponent, UnorderedListComponent ],
})
export class SharedModule { }
