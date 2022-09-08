import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = argv[2];
const luminosity = argv[3];

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
  ${createString('#', 31)}
  ${createString('#', 31)}
  ${createString('#', 31)}
  ${createString('#', 5)}${createString(' ', 21)}${createString('#', 5)}
  ${createString('#', 5)}${createString(' ', 7)}${hex}${createString(
    ' ',
    7,
  )}${createString('#', 5)}
  ${createString('#', 5)}${createString(' ', 21)}${createString('#', 5)}
  ${createString('#', 31)}
  ${createString('#', 31)}
  ${createString('#', 31)}
  `;
  return chalk.hex(hex)(canvas);
}

const randomColorHex = createColor();

// log result to the console
console.log(createColoredCanvas(randomColorHex));
