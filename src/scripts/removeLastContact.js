import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        const parseData = JSON.parse(data);
        if (parseData.length === 0) {
            return;
        } else {
            parseData.pop();
            await writeContacts(JSON.stringify(parseData, null, 2));
        }
    } catch (error) {
        console.log(error);

    }
};

removeLastContact();
