const {caesarCipher,symbolCipher,reverseCipher} = require('./encryptors.js');

const encodeMessage = (str) => {
  const first = caesarCipher(str,2);
  const second = reverseCipher(first);
  const third = symbolCipher(second);
  const fourth = reverseCipher(third);
  return fourth;
}

const decodeMessage = (str) => {
  const first = reverseCipher(str);
  const second = symbolCipher(first);
  const third = reverseCipher(second);
  const fourth = caesarCipher(third,-2);
  return fourth;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);