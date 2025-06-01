import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";



export const generateContacts = async (number) => {
    const contacts = [];
    for (let i=0; i< number; i++) {
        let result = createFakeContact();
        contacts.push(result);
    }
    await writeContacts(JSON.stringify(contacts));

};

generateContacts(5);
