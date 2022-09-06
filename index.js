import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = argv[3];
const luminosity = argv[2];

// functions for creating strings of # and space
function createStringOfHashTags(stringLength) {
  let string = '';
  for (let i = 0; i < stringLength; i++) {
    string += '#';
  }
  return string;
}

function createStringOfSpaces(stringLength) {
  let stringOfSpaces = '';
  for (let i = 0; i < stringLength; i++) {
    stringOfSpaces += ' ';
  }
  return stringOfSpaces;
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
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(5)}${createStringOfSpaces(
    29,
  )}${createStringOfHashTags(5)}
  ${createStringOfHashTags(5)}${createStringOfSpaces(
    11,
  )}${hex}${createStringOfSpaces(11)}${createStringOfHashTags(5)}
  ${createStringOfHashTags(5)}${createStringOfSpaces(
    29,
  )}${createStringOfHashTags(5)}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  `;
  return chalk.hex(hex)(canvas);
}

const randomColorHex = createColor();

// log result to the console
console.log(createColoredCanvas(randomColorHex));
