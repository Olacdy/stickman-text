import { ChangeEvent, useState } from 'react';

import { toast } from 'sonner';

import { Textarea } from '@/components/ui/textarea';

import HolderTabs from '@/components/holder-tabs';

import {
  getTwitterLines,
  putTwitterLinesInStickman,
} from '@/lib/twitter-lines-utils';

import { HolderType } from '@/types/holder';

const StickmanText = () => {
  const [text, setText] = useState<string>('');
  const [twitterLines, setTwitterLines] = useState<string[]>([]);
  const [holder, setHolder] = useState<HolderType>('stickman');

  const handleTextChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;

    setText(input);

    const newTwitterLines = getTwitterLines(input, twitterLines);

    setTwitterLines(newTwitterLines);
  };

  const handleTextClick = () => {
    navigator.clipboard.writeText(
      putTwitterLinesInStickman(twitterLines, holder)
    );

    toast.success('Your stickman copied to a clipboard.');
  };

  return (
    <section className='flex max-h-screen w-full max-w-sm flex-col items-center gap-5 p-5'>
      <HolderTabs holder={holder} setHolder={setHolder} />
      <pre
        id='stickman'
        onClick={handleTextClick}
        className='no-scrollbar flex-grow cursor-pointer select-none overflow-auto whitespace-pre font-twitter-chirp'>
        {putTwitterLinesInStickman(twitterLines, holder)}
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
