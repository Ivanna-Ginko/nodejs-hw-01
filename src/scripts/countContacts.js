import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    const array = await getAllContacts();
    //console.log(array.length)
    return array.length;

};

console.log(await countContacts());
