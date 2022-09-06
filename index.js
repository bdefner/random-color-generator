import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const randomColorHex = randomcolor();
const returnCanvas = createCanvas();

// functions for creating strings of # and space
function createStringOfHashTags(stringLength) {
  let StringOfHsahTags = '';
  for (let i = 0; i < stringLength; i++) {
    StringOfHsahTags += '#';
  }
  return StringOfHsahTags;
}

function createEmptyString(stringLength) {
  let emptyString = '';
  for (let i = 0; i < stringLength; i++) {
    emptyString += ' ';
  }
  return emptyString;
}

// create the output canvas with the hex code
function createCanvas() {
  let canvas;
  canvas = `
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(5)}${createEmptyString(29)}${createStringOfHashTags(
    5,
  )}
  ${createStringOfHashTags(5)}${createEmptyString(
    11,
  )}${randomColorHex}${createEmptyString(11)}${createStringOfHashTags(5)}
  ${createStringOfHashTags(5)}${createEmptyString(29)}${createStringOfHashTags(
    5,
  )}
  ${createStringOfHashTags(39)}
  ${createStringOfHashTags(39)}
  `;
  return canvas;
}

// log result to the console
console.log(chalk.hex(randomColorHex)(returnCanvas));
