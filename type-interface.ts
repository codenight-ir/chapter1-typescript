// string
//number
//array
//object
//any
//boolean
//unknown
//const assertion - never - void
// type alias - interface

//create - delete - edit - read
type TUser = {
  id: number;
  name: string;
};
type UserDto = {
  name: string;
};
type FilterUser = {
  id?: number;
  name?: string;
};
interface IUser {
  create(data: UserDto): void;
  delete(id: number): void;
  read(filter: FilterUser): TUser[];
  update(id: number, user: UserDto): void;
}
class User implements IUser {
    create(data: UserDto): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    read(filter: FilterUser): TUser[] {
        throw new Error("Method not implemented.");
    }
    update(id: number, user: UserDto): void {
        throw new Error("Method not implemented.");
    }
}
