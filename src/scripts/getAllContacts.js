import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const fileContent = await readContacts();
        const allContacts = await JSON.parse(fileContent);
        return allContacts;
    } catch (error) {
        console.log(error);

    }
};

console.log(await getAllContacts());
