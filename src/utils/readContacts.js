import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const readContacts = async () => {
    try{
       return await fs.readFile(PATH_DB);
    }catch(e){
        console.log(e);
    }
};

///readContacts().then(console.log(111))


