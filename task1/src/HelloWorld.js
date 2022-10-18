import React from "react";

/*
Using React.createElement
 */
export function HelloWorld() {
    return [
        React.createElement(
        'h1',
        null,

        'Hello, world!'
        )
    ];
}
