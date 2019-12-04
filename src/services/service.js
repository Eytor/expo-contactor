import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts';
import { getRandomColor } from '../resources/resources';

// readAsStringAsync - nær í mynd / texta

// writeAsStringAsync - býr til mynd/texta
export function addContact(contact) {
    const fileName = `${FileSystem.documentDirectory}${contact.id}.json`;
    FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
}

export function editContact(contact) {
    const newFileName = `${FileSystem.documentDirectory}${contact.id}.json`;
    FileSystem.writeAsStringAsync(
        newFileName,
        JSON.stringify({
            id: contact.id,
            name: contact.name,
            phoneNumber: contact.phoneNumber,
            photo: contact.photo,
        }),
    );
}

export function deleteContact(contact) {
    const fileName = `${FileSystem.documentDirectory + contact.id}.json`;
    FileSystem.deleteAsync(fileName);
}

export async function getAllContacts() {
    const files = await FileSystem.readDirectoryAsync(
        `${FileSystem.documentDirectory}`,
    );
    return Promise.all(
        files.map(async (file) => {
            const data = await FileSystem.readAsStringAsync(
                `${FileSystem.documentDirectory}${file}`,
            );
            return JSON.parse(data);
        }),
    );
}

export async function getPhonesContacts(firstAvailableId) {
    const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
    });
    return Promise.all(
        data.map(async (contact, index) => {
            if ((contact.firstName || contact.lastName)
                && contact.phoneNumbers
                && contact.phoneNumbers[0].number) {
                const newContact = {
                    id: (firstAvailableId + index),
                    name: `${contact.firstName ? contact.firstName : ''} ${contact.lastName ? contact.lastName : ''}`.trim(),
                    phoneNumber: contact.phoneNumbers[0].number,
                    photo: null,
                    background: getRandomColor(),
                };
                const fileName = `${FileSystem.documentDirectory}${newContact.id}.json`;
                await FileSystem.writeAsStringAsync(
                    fileName,
                    JSON.stringify(newContact),
                );
            }
        }),
    );
}

// moveAsync

// copyAsync

// makeDirectoryAsync
