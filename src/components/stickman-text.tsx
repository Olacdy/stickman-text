import { ChangeEvent, FC, useState } from 'react';

import { Textarea } from '@/components/ui/textarea';

import { centerAndWrapTextWithBars } from '@/lib/utils';

type StickmanTextProps = {};

const StickmanText: FC<StickmanTextProps> = ({}) => {
  const [text, setText] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section className='flex w-full max-w-sm flex-col items-center gap-5 px-5'>
      <pre className='whitespace-pre'>
        {`|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|\n`}
        {centerAndWrapTextWithBars(text)}
        {`
|________________________|
        \\ (•◡•) /
          \\    /
           |__|
           |  |  
           |_ |_ 
`}
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
