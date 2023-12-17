//Utility Types (partial, Required, Omit, Pick, Readonly)

type Person = {
  id: number;
  name: string;
  email: string;
  age: number;
};
type UpdatePerson = Omit<Person, "id">;
type OptionalPerson = Partial<Person>;
type RegisterPerson = Pick<Person, "name" | "email">;
type RequiredPerson = Required<OptionalPerson>;
type ReadOnlyPerson = Readonly<Person>;

const newPerson: RegisterPerson = {
  name: "Erfan",
  email: "erfan@gmail.com",
};
function editPerson(id: number, updateData: UpdatePerson) {
  //
}

const person: ReadOnlyPerson = {
  id: 1,
  name: "ali",
  email: "ali@yahoo.com",
  age: 55,
};
person.name = "dbgrfg";
