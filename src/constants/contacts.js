import { log } from 'node:console'
import path from 'node:path'


export const PATH_DB = path.join('src', 'db', 'db.json');

log(PATH_DB);
