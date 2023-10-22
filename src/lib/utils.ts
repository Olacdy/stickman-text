import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function centerAndWrapTextWithBars(
  input: string,
  totalLength: number = 24
) {
  const paddingLength =
    input.length < totalLength ? totalLength - input.length : 0;
  const leftPadding = ' '.repeat(Math.floor(paddingLength / 2));
  const rightPadding = ' '.repeat(Math.ceil(paddingLength / 2));

  let centeredText = `|${leftPadding}${input}${rightPadding}|`;

  if (input.length > totalLength) {
    centeredText =
      `|${input.substring(0, totalLength)}|\n` +
      centerAndWrapTextWithBars(input.substring(totalLength), totalLength);
  }

  return centeredText;
}
