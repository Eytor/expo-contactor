export const Colors = {
    background: '#30292F',
    mainBorder: '#3F4045',
    success: '#008148',

};

export const getRandomColor = () => {
    const hexLetters = '0123456789ABCDEF';
    let hexString = '#';
    for (let i = 0; i < 6; i++) {
        hexString += hexLetters.charAt(Math.random() * hexLetters.length);
    }
    return hexString;
};
