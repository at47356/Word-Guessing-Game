import dictionary from './dictionary';
//Random Number generator
export const getWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];

//Function check iif word is in dictionary
export const isInDictionary = (str) => dictionary.includes(str);
