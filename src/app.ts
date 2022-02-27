import {TestLogic} from "./logic/TestLogic";

function hello(name: string): string {
    return `Hello, ${name}!`;
}

exports.handler = async function(event: any, context: any) {
    console.log(hello("World"));

    let testLogic = new TestLogic("hoge");
    console.log(testLogic.getProp1());
    testLogic.setProp1("fuga");
    console.log(testLogic.getProp1());

    return "success!!";
}

