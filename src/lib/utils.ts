import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const MAX_WIDTH = 210;

const STICKMAN_ID = 'stickman';

const FONT_SIZE = getElementFontSize(STICKMAN_ID);

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getElementFontSize(id: string) {
  const element = document.getElementById(id);

  if (!element) return 16;

  return parseInt(window.getComputedStyle(element).fontSize.replace('px', ''));
}

export function calculateTextWidth(text: string): number {
  if (!context) {
    return -1;
  }

  context.font = `${FONT_SIZE}px Twitter Chirp`;

  const width = context.measureText(text.replace('\n', '')).width;

  return width;
}
