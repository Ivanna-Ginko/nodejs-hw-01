import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    const array = await getAllContacts();
    return array.length;
};

//console.log(await countContacts());
