import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts';
import { Platform } from 'react-native';
import { Linking } from 'expo';
import { getRandomColor } from '../resources/resources';


/**
 * Function that adds contact to file as <id>.json.
 *
 * @export
 * @param {object} contact - an object of contact which has the properties id, name,
 * phoneNumber, photo and background
 */
export function addContact(contact) {
    const fileName = `${FileSystem.documentDirectory}${contact.id}.json`;
    FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
}

/**
 * Function that recieves a contact and overrides it's json file.
 *
 * @export
 * @param {object} contact - an object of contact which has the properties id, name,
 * phoneNumber, photo and background
 */
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

/**
 * Unused function that deletes a contacts file.
 *
 * @export
 * @param {object} contact - an object of contact which has the properties id, name,
 * phoneNumber, photo and background
 */
export function deleteContact(contact) {
    const fileName = `${FileSystem.documentDirectory + contact.id}.json`;
    FileSystem.deleteAsync(fileName);
}


/**
 * Function that get's all saved contacts and returns it as array
 *
 * @export
 * @returns Array of Contacts
 */
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


/**
 * getPhoneContacts
 * function that request all contacts from phone that have
 * name and phone number and adds the contacts to the app
 *
 * @export
 * @param {number} firstAvailableId - first available id
 * @returns Promise
 */
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

/**
 * Function to make a phone call:
 * on ios starts calling immediately,
 * on Android opens phone app with phone number
 *
 * @export
 * @param {number} phoneNumber - phone number to call
 */
export function handleCall(phoneNumber) {
    const url = Platform.OS === 'ios' ? `tel://${phoneNumber}` : `tel:${phoneNumber}`;
    Linking.openURL(url);
}
