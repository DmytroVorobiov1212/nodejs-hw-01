import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const fileContent = await readContacts();
        const contacts = JSON.parse(fileContent);
        const newContact = createFakeContact();
        contacts.push(newContact);
        await writeContacts(JSON.stringify(contacts, null, 2))
    } catch (error) {
        console.log(error)
    }
};

addOneContact();
