export const Colors = {
    background: '#30292F',
    arsenic: '#3F4045',
    success: '#008148',
    gray: '#909590',
    error: '#D62828',
};

export const getRandomColor = () => {
    const hexLetters = '0123456789ABCDEF';
    let hexString = '#';
    for (let i = 0; i < 6; i++) {
        hexString += hexLetters.charAt(Math.random() * hexLetters.length);
    }
    return hexString;
};
