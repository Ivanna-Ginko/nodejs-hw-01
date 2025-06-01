import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  let result = JSON.parse(await readContacts());
  return result;

};

console.log(await getAllContacts());
