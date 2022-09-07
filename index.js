import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = argv[3];
const luminosity = argv[2];

// function for creating strings of # and spaces
function createString(character, stringLength) {
  let string = '';
  for (let i = 0; i < stringLength; i++) {
    string += character;
  }
  return string;
}

function createColor() {
  return randomColor({
    hue: hue,
    luminosity: luminosity,
  });
}

// create the output canvas with the hex code
function createColoredCanvas(hex) {
  const canvas = `
  ${createString('#', 39)}
  ${createString('#', 39)}
  ${createString('#', 39)}
  ${createString('#', 5)}${createString(' ', 29)}${createString('#', 5)}
  ${createString('#', 5)}${createString(' ', 11)}${hex}${createString(
    ' ',
    11,
  )}${createString('#', 5)}
  ${createString('#', 5)}${createString(' ', 29)}${createString('#', 5)}
  ${createString('#', 39)}
  ${createString('#', 39)}
  ${createString('#', 39)}
  `;
  return chalk.hex(hex)(canvas);
}

const randomColorHex = createColor();

// log result to the console
console.log(createColoredCanvas(randomColorHex));
