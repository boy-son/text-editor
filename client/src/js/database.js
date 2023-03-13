import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
const jateDB = await openDB('jate', 1);
const txt = jateDB.transaction('jate', 'readwrite');
const store = txt.objectStore('jate');
const reqPut = store.add(content);
const resPut = await reqPut;
console.log("data added: ", resPut);
return resPut;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const jateDB = await openDB('jate', 1);
const txt = jateDB.transaction('jate', 'readonly');
const store = txt.objectStore('jate');
const reqGet = store.getAll();
const resGet = await reqGet;
console.log("data retrieved: ", resGet);
return resGet;
};

initdb();
