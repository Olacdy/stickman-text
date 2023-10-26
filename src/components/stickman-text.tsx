import { ChangeEvent, useState } from 'react';

import { toast } from 'sonner';

import { Textarea } from '@/components/ui/textarea';

import {
  getTwitterLines,
  putTwitterLinesInStickman,
} from '@/lib/twitter-lines-utils';

const StickmanText = () => {
  const [text, setText] = useState<string>('');
  const [twitterLines, setTwitterLines] = useState<string[]>([]);

  const handleTextChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;

    setText(input);

    const newTwitterLines = getTwitterLines(input, twitterLines);

    setTwitterLines(newTwitterLines);
  };

  const handleTextClick = () => {
    navigator.clipboard.writeText(putTwitterLinesInStickman(twitterLines));

    toast.success('Your stickman copied to a clipboard.');
  };

  return (
    <section className='flex flex-col items-center w-full max-w-sm gap-5 p-5'>
      <pre
        id='stickman'
        onClick={handleTextClick}
        className='whitespace-pre cursor-pointer select-none font-twitter-chirp'>
        {putTwitterLinesInStickman(twitterLines)}
      </pre>
      <Textarea
        value={text}
        onChange={handleTextChange}
        className='resize-none'
      />
    </section>
  );
};

export default StickmanText;
