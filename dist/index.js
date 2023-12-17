"use strict";
// string
//number
//array
//object
//any
//boolean
//unknown
//const assertion - never - void
// type alias - interface
//union - tuple
//Literal Types - Enum
var myId = undefined;
var position = [53.25458, 49.857456];
var lat = position[0], lng = position[1];
var course = [
    1,
    "NestJS",
    "the backend course for nodejs developers",
];
var messageStatus = "Draft";
var userStatus = 2;
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Initialized"] = "initialized";
    MessageStatus["Draft"] = "draft";
    MessageStatus["Pending"] = "pending";
})(MessageStatus || (MessageStatus = {}));
var msgStatus = MessageStatus.Pending;
var userInput = "draft";
console.log(Object.keys(MessageStatus));
console.log(Object.values(MessageStatus).includes("draft"));
//# sourceMappingURL=index.js.map