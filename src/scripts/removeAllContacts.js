import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        const data = await readContacts();
        const parseData = JSON.parse(data);
        if (parseData.length !== 0) {
            const newArray = [];
            await writeContacts(JSON.stringify(newArray, null, 2));
        } else {
            return console.log('Contact list is empty!');

        }
    } catch (error) {
        console.log(error);
    }

};

removeAllContacts();
