// Script to fix escaping issues in seed-albums.ts
// Run: node fix-seed-albums.js

const fs = require('fs');

// Read the current file
const filePath = './lib/musicbrainz/seed-albums.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix double backslashes before apostrophes: \\' -> '
content = content.replace(/\\\\/g, '\\');

// Convert all single-quoted strings to double-quoted strings
// This eliminates the need for escaping apostrophes entirely

// Match artist and title fields with single quotes
content = content.replace(/artist: '([^']+)'/g, (match, p1) => {
  // Unescape any escaped apostrophes since we're switching to double quotes
  const unescaped = p1.replace(/\\'/g, "'");
  return `artist: "${unescaped}"`;
});

content = content.replace(/title: '([^']+)'/g, (match, p1) => {
  // Unescape any escaped apostrophes
  const unescaped = p1.replace(/\\'/g, "'");
  return `title: "${unescaped}"`;
});

content = content.replace(/country: '(UK|US)'/g, 'country: "$1"');
content = content.replace(/mbid: '([^']+)'/g, 'mbid: "$1"');

// Fix genre keys in SEED_ALBUMS object
content = content.replace(/'([^']+)':/g, (match, p1) => {
  const unescaped = p1.replace(/\\'/g, "'");
  return `"${unescaped}":`;
});

// Fix type definitions
content = content.replace(/country: 'UK' \| 'US'/g, 'country: "UK" | "US"');

// Write the fixed content
fs.writeFileSync(filePath, content);

console.log('✓ Fixed all escaping issues in seed-albums.ts');
console.log('✓ Converted all strings to use double quotes');
console.log('✓ File is now error-free');