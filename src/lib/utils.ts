import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getElementFontSize(id: string) {
  const element = document.getElementById(id);

  if (!element) return 16;

  return parseInt(window.getComputedStyle(element).fontSize.replace('px', ''));
}

export function calculateTextWidth(
  text: string,
  id: string = 'stickman'
): number {
  const fontSize = getElementFontSize(id);

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return -1;
  }

  context.font = `${fontSize}px Twitter Chirp`;

  const width = context.measureText(text).width;

  return width;
}

export function calculateRedundantLength(line: string, maxWidth: number = 210) {
  let redundantLength = 0;
  let newLine = `${line}`;

  while (calculateTextWidth(newLine) > maxWidth) {
    redundantLength++;
    newLine = newLine.slice(0, newLine.length - 1);
  }

  return redundantLength;
}

export function centerAndWrapTextWithBars(
  input: string,
  maxWidth: number = 210
) {
  const processLine = (line: string) => {
    const lineWidth = calculateTextWidth(line);

    const paddingLength =
      (lineWidth < maxWidth ? maxWidth - lineWidth : 0) / 3.6;
    const leftPadding = ' '.repeat(Math.floor(paddingLength / 2));
    const rightPadding = ' '.repeat(Math.floor(paddingLength / 2));

    let centeredLine = `|${leftPadding}${line}${rightPadding}|`;

    if (lineWidth > maxWidth) {
      const redundantLength = calculateRedundantLength(line, maxWidth);

      const newLine = line.substring(line.length - redundantLength);

      centeredLine =
        `|${line.substring(0, line.length - redundantLength)}|\n` +
        processLine(newLine);
    }

    return centeredLine;
  };

  const lines = input.split('\n');

  const centeredLines = lines.map((line) => processLine(line));

  const centeredText = centeredLines.join('\n');

  return centeredText;
}

export function wrapTextInStickman(text: string) {
  const textWithStickman = `|￣￣￣￣￣￣￣￣￣￣￣￣￣|
${centerAndWrapTextWithBars(text)}
|＿＿＿＿＿＿＿＿＿＿＿＿＿|
                      \\ (•◡•) /
                        \\       /
                            |_|
                            |  |  
                            |_|_ 
`;

  return textWithStickman;
}
