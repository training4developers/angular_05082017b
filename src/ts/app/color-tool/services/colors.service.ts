import { Injectable } from "@angular/core";

import { Color } from "../models/color";

@Injectable()
export class ColorsService {

    private colors: Color[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

    public getAll() {
        return this.colors;
    }

    public append(newColor: string) {

        const nextId = this.colors.reduce(
            (maxId, nextColor) => Math.max(maxId, nextColor.id), 0 ) + 1;

        this.colors = this.colors.concat({
            id: nextId,
            name: newColor,
        });

        return this;
    }
}
