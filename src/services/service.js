import * as FileSystem from 'expo-file-system';


// readAsStringAsync - nær í mynd / texta

// writeAsStringAsync - býr til mynd/texta
export function addContact(contact) {
    const fileName = `${FileSystem.documentDirectory}contacts/${contact.name}.json`;
    FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
}

export function deleteContact(contact) {
    const fileName = `${FileSystem.documentDirectory + contact.name}.json`;
    FileSystem.deleteAsync(fileName);
}

export async function getAllContacts() {
    const files = await FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}contacts/`);
    return Promise.all(files.map(async (file) => {
        const data = await FileSystem.readAsStringAsync(`${FileSystem.documentDirectory}contacts/${file}`);
        return JSON.parse(data);
    }));
}


// moveAsync

// copyAsync

// makeDirectoryAsync
