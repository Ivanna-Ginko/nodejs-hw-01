import { writeContacts } from "../utils/writeContacts.js";
import { getAllContacts } from "./getAllContacts.js";

export const removeLastContact = async () => {
    const arr = await getAllContacts();
    arr.pop();
    writeContacts(JSON.stringify(arr));
    return arr;
};

removeLastContact();
