import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {

    public transform(value: any) {

        const theValue = String(value);

        return theValue.charAt(0).toUpperCase() + theValue.slice(1);

    }
}
