import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function centerAndWrapTextWithBars(
  input: string,
  totalLength: number = 24
) {
  const processLine = (line: string) => {
    const paddingLength =
      line.length < totalLength ? totalLength - line.length : 0;
    const leftPadding = ' '.repeat(Math.floor(paddingLength / 2));
    const rightPadding = ' '.repeat(Math.ceil(paddingLength / 2));

    let centeredLine = `|${leftPadding}${line}${rightPadding}|`;

    if (line.length > totalLength) {
      centeredLine =
        `|${line.substring(0, totalLength)}|\n` +
        processLine(line.substring(totalLength));
    }

    return centeredLine;
  };

  const lines = input.split('\n');

  const centeredLines = lines.map((line) => processLine(line));

  const centeredText = centeredLines.join('\n');

  return centeredText;
}
