import { Component, Input } from "@angular/core";

@Component({
    selector: "tool-header",
    template: `
        <header>
            <h1>{{header}}</h1>
        </header>
    `,
})
export class ToolHeaderComponent {

    @Input()
    public header: string;

}
