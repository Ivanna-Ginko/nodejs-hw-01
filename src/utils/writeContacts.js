import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
 try {
    await  fs.writeFile(PATH_DB, updatedContacts);
    console.log('Дані успішно записані y файл.');
  } catch (err) {
    console.error('Помилка запису y файл:', err);
  }
};

//writeContacts().then(console.log(12));





