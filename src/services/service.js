import * as FileSystem from 'expo-file-system';


// readAsStringAsync - nær í mynd / texta

// writeAsStringAsync - býr til mynd/texta
export function addContact(uri, contact) {
    const fileName = `${FileSystem.documentDirectory + contact.name}.json`;
    const newContact = { name: contact.name, phoneNumber: contact.phoneNumber, photo: uri };
    FileSystem.writeAsStringAsync(fileName, JSON.stringify(newContact));
}

export function deleteContact(contact) {
    const fileName = `${FileSystem.documentDirectory + contact.name}.json`;
    FileSystem.deleteAsync(fileName);
}


// moveAsync

// copyAsync

// makeDirectoryAsync
