const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split(/\s*[\*]+\s*/).map(el1 => el1.match(/.{10}/g).map(el2 => el2.match(/.{2}/g)))
    return words.map(el1 => el1.map(el2 => el2.reduce(
        (accumulator, current) => {
            if(current === '10') return accumulator + ".";
            if(current === '11') return accumulator + "-";
            return accumulator;
    }, "")).map(el2 => MORSE_TABLE[el2]).join('')
    ).join(' ')
}

module.exports = {
    decode
}