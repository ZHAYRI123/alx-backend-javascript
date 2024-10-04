const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
if (process.stdin.isTTY) {
  console.log('Welcome to Holberton School, what is your name?');
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
} else {
  let input = '';
  process.stdin.on('data', (data) => {
    input += data;
  });
  process.stdin.on('end', () => {
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${input.trim()}`);
    console.log('This important software is now closing');
  });
}
rl.on('close', () => {
  if (process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
