import { MAX_WIDTH, calculateTextWidth } from '@/lib/utils';

export function formTwitterLines(text: string) {
  const twitterLines = [];
  let currentLine = '';

  const lines = text.split('\n');

  for (const line of lines) {
    const words = line.split(' ');
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const lineWidth = calculateTextWidth(testLine);

      if (lineWidth <= MAX_WIDTH) {
        if (currentLine) {
          currentLine += ` ${word}`;
        } else {
          currentLine = word;
        }
      } else {
        if (currentLine) {
          twitterLines.push(currentLine);
          currentLine = '';
        }

        if (lineWidth <= MAX_WIDTH) {
          currentLine = word;
        } else {
          for (let i = 0; i < word.length; i++) {
            const subWord = word.charAt(i);
            const subLineWidth = calculateTextWidth(currentLine + subWord);

            if (subLineWidth <= MAX_WIDTH) {
              currentLine += subWord;
            } else {
              twitterLines.push(currentLine);
              currentLine = subWord;
            }
          }
        }
      }
    }

    if (currentLine) {
      twitterLines.push(currentLine);
      currentLine = '';
    }
  }

  return twitterLines;
}

export function getTwitterLines(text: string, twitterLines: string[]) {
  const concatText = twitterLines.join('');

  let lastLine = twitterLines.pop() ?? '';

  if (text.length - concatText.length === 1) {
    const newCharacter = text.slice(-1);

    if (newCharacter === '\n') return [...twitterLines, lastLine, '\n'];

    if (calculateTextWidth(lastLine + newCharacter) > MAX_WIDTH) {
      return [...twitterLines, lastLine, newCharacter];
    }

    return [...twitterLines, lastLine + newCharacter];
  }

  if (text.length - concatText.length === -1) {
    lastLine = lastLine.slice(0, -1);

    if (lastLine.length > 0) {
      return [...twitterLines, lastLine];
    }
  }

  const formedTwitterLines = formTwitterLines(text);

  return formedTwitterLines;
}

export function processTwitterLine(twitterLine: string) {
  const twitterLineWithoutNewLine = twitterLine.replace('\n', '');

  const lineWidth = calculateTextWidth(twitterLineWithoutNewLine);

  const paddingLength =
    (lineWidth < MAX_WIDTH ? MAX_WIDTH - lineWidth : 0) / 3.6;
  const leftPadding = ' '.repeat(Math.floor(paddingLength / 2));
  const rightPadding = ' '.repeat(Math.floor(paddingLength / 2));

  return `|${leftPadding}${twitterLineWithoutNewLine}${rightPadding}|`;
}

export function putTwitterLinesInStickman(twitterLines: string[]) {
  const processedTwitterLines = twitterLines
    .map((line) => processTwitterLine(line))
    .join('\n');

  const textWithStickman = `|￣￣￣￣￣￣￣￣￣￣￣|
${
  processedTwitterLines.length > 0
    ? processedTwitterLines
    : processTwitterLine('')
}
|＿＿＿＿＿＿＿＿＿＿＿|
                  \\ (•◡•) /
                    \\       /
                        |_|
                        |  |  
                        |_|_ `;

  return textWithStickman;
}
