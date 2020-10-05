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
    let sentence = ''
    let morseLetter = ''
    for (let i = 0; i*10 < expr.length; i++) {
        let word = expr.substring(i*10, i*10+10).replace(/0*/, '')
        if (word === '**********') {
            sentence  = sentence + ' '
        } else {
            for (let j =0; j+1 < word.length; j +=2) {
                let codeLetter = '' + word[j] + word[j+1]
                if (codeLetter === '10') {
                    morseLetter = morseLetter + '.'
                } else {
                    morseLetter = morseLetter + '-'
                }

            }

            sentence  = sentence + MORSE_TABLE[morseLetter]
            morseLetter = ''
        }
    }


    return sentence

}

module.exports = {
    decode
}