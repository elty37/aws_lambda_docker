export class TestLogic {
    private prop1: string;

    constructor(_prop1: string) {
        if (_prop1.length < 1) {
            throw new Error("prop1 must be empty.");
        }
        this.prop1 = _prop1;
    }

    public getProp1() {
        return this.prop1;
    }

    public setProp1(val: string) {
        if (val.length < 1) {
            throw new Error("prop1 must be empty.");
        }
        this.prop1 = val;
    }
}