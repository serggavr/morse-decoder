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
    let morseLetters = expr.split(/(.{10})/).filter(O=>O)
    let morseSymbol = "";
    let answer = "";
    for (let i = 0; i < morseLetters.length; i++) {
      let morseLetter = morseLetters[i].split(/(.{2})/).filter(O=>O)
      for (let j = 0; j < morseLetter.length; j++) {
        if (morseLetter[j] == "00") {
          morseSymbol += "";
          }
        if (morseLetter[j] == "11") {
          morseSymbol += "-";
          }
        if (morseLetter[j] == "10") {
          morseSymbol += ".";
          }
        if (morseLetter[j] == "**") {
          morseSymbol += " ";
          break;
          }
      }
      if (morseSymbol == " ") {answer += " ";}
      else {answer += MORSE_TABLE[morseSymbol];}
    morseSymbol = "";
    }
    return answer;
}

module.exports = {
    decode
}