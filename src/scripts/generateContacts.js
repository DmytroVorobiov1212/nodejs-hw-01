import { faker } from "@faker-js/faker";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { log } from "node:console";

const generateContacts = async (number) => {
    try {
        const fileContent = await readContacts();
        const existingContacts = JSON.parse(fileContent);

        const newContacts = faker.helpers.multiple(createFakeContact, {
            count: number,
        });

        const updatedContacts = [...existingContacts, ...newContacts];

        await writeContacts(JSON.stringify(updatedContacts, null, 2));

    } catch (error) {
        log(error.message);
    }
};

generateContacts(5);
