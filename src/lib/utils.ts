import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTextWidth(
  text: string,
  font: string = 'Twitter Chirp'
): number {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return -1;
  }

  context.font = font;

  const width = context.measureText(text).width;

  return width;
}

export function centerAndWrapTextWithBars(
  input: string,
  maxWidth: number = 160
) {
  const processLine = (line: string, lineWidth: number) => {
    const paddingLength =
      (lineWidth < maxWidth ? maxWidth - lineWidth : 0) / 2.8;
    const leftPadding = ' '.repeat(Math.floor(paddingLength / 2));
    const rightPadding = ' '.repeat(Math.ceil(paddingLength / 2));

    let centeredLine = `|${leftPadding}${line}${rightPadding}|`;

    if (lineWidth > maxWidth) {
      const newLine = line.substring(line.length - 1);

      console.log(newLine);

      centeredLine =
        `|${line.substring(0, line.length - 1)}|\n` +
        processLine(newLine, calculateTextWidth(newLine));
    }

    return centeredLine;
  };

  const lines = input.split('\n');

  const centeredLines = lines.map((line) =>
    processLine(line, calculateTextWidth(line))
  );

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
