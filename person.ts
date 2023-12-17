interface ISkill {
  id: number;
  title: string;
  description?: string;
}
type TAddress = {
  id: number;
  city: string;
  address: string;
  alley?: string;
  zipCode: number;
};
interface IPerson {
  id: number;
  name: string;
  mobile: string;
  age: number;
  skills: ISkill[];
  address: TAddress[];
}
type TPerson = {
  id: number;
  name: string;
  mobile: string;
  age: number;
  skills: ISkill[];
  address: TAddress[];
};

const person1: IPerson = {
  id: 1,
  name: "erfan yousefi",
  age: 28,
  mobile: "09332255768",
  skills: [
    {
      id: 1,
      title: "Backend developer",
    },
  ],
  address: [
    {
      id: 1,
      city: "Tehran",
      address: "shariati street",
      zipCode: 123456,
    },
  ],
};
const person2: IPerson = {
  id: 1,
  name: "erfan yousefi",
  age: 28,
  mobile: "09332255768",
  skills: [
    {
      id: 1,
      title: "Backend developer",
    },
  ],
  address: [
    {
      id: 1,
      city: "Tehran",
      address: "shariati street",
      zipCode: 123456,
    },
  ],
};
