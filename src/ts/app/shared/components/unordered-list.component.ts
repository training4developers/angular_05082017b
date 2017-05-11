import { Component, Input } from "@angular/core";

@Component({
    selector: "unordered-list",
    template: `<ul>
        <li *ngFor="let listItem of listItems">
            {{listItem}}
            <button type="button" (click)="clickMe(listItem)">Click Me!</button>
        </li>
    </ul>`,
})
export class UnorderedListComponent {

    @Input()
    public listItems: string[];

    public clickMe(item: string) {
        console.log(item);
    }

}
