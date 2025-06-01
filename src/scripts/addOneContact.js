import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { getAllContacts } from "./getAllContacts.js";



export const addOneContact = async () => {
  const data = await getAllContacts();
  const newC = createFakeContact();
  data.push(newC);
  await writeContacts(JSON.stringify(data)) ;
  return data;
};


/*
try {
    await fs.appendFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу');
} catch {
console.log (err)
}
  } */

addOneContact().then(console.log('...'));
