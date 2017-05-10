import { Component, Input } from "@angular/core";

@Component({
    selector: "unordered-list",
    template: `<ul>
        <li *ngFor="let listItem of listItems">{{listItem}}</li>
    </ul>`,
})
export class UnorderedListComponent {

    @Input()
    public listItems: string[];

}
