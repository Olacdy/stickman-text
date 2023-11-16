import { HolderType } from '@/types/holder';

const stickman = `|＿＿＿＿＿＿＿＿＿＿＿|
                  \\ (•◡•) /
                    \\       /
                        |_|
                        |  |  
                        |_|_ `;

const stickcat = `|＿＿＿＿＿＿＿＿＿＿＿|
          (^•ㅅ•^)|| 
          / 　 づ   ||`;

export function getHolder(holder: HolderType) {
  if (holder === 'stickman') return stickman;
  if (holder === 'stickcat') return stickcat;
}
