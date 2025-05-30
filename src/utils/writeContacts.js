import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { log } from 'node:console'

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, updatedContacts, 'utf8')
    } catch (error) {
        log(error)
    }
};
