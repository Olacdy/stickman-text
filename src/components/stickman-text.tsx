import { ChangeEvent, FC, useState } from 'react';

import { Textarea } from '@/components/ui/textarea';

import { wrapTextInStickman } from '@/lib/utils';
import { toast } from 'sonner';

type StickmanTextProps = {};

const StickmanText: FC<StickmanTextProps> = ({}) => {
  const [text, setText] = useState('');

  const handleTextChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTextClick = () => {
    navigator.clipboard.writeText(wrapTextInStickman(text));

    toast.success('Your stickman copied to a clipboard.');
  };

  return (
    <section className='flex w-full max-w-sm flex-col items-center gap-5 px-5'>
      <pre
        id='stickman'
        onClick={handleTextClick}
        className='cursor-pointer select-none whitespace-pre font-twitter-chirp'>
        {wrapTextInStickman(text)}
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
