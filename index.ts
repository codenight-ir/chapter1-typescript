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

//Utility Types (partial, Required, Omit, Pick, Readonly)

type ID = number | string | undefined | null;
let myId: ID = undefined;

type TPosition = [lat: number, lng: number];
const position: TPosition = [53.25458, 49.857456];
const [lat, lng] = position;

type TCourse = [id: number, title: string, description?: string];
const course: TCourse = [
  1,
  "NestJS",
  "the backend course for nodejs developers",
];

type TStatus =
  | "Initialized"
  | "Draft"
  | "Pending"
  | "Sent"
  | "Received"
  | "Cancel";

type TNumberStatus = 0 | 1 | 2 | 3 | 4;
let messageStatus: TStatus = "Draft";
const userStatus: TNumberStatus = 2;

enum MessageStatus {
  Initialized = "initialized",
  Draft = "draft",
  Pending = "pending",
}

const msgStatus: MessageStatus = MessageStatus.Pending;
const userInput: MessageStatus = "draft" as MessageStatus;
console.log(Object.keys(MessageStatus));
console.log(Object.values(MessageStatus).includes("draft" as MessageStatus));
