import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const fileContent = await readContacts();
    const parseFile = JSON.parse(fileContent)
    return parseFile.length;

};

console.log(await countContacts());
