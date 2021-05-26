export class Filter {
    public name: string;
    public value: any;
    public inUse: boolean;
    public mandatory: boolean;

    constructor (name: string, value: any) {
        this.name = name;
        this.value = value;
        this.inUse = false;
        this.mandatory = false;
    }
}
