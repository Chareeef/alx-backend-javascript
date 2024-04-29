#!/usr/bin/node

// Show Welcome
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read input
process.stdin.on('readable', () => {
  // Read name
  const name = process.stdin.read();

  // Display name
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handle when the user ends the program
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
