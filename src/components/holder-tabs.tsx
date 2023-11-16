import { FC } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { HolderType } from '@/types/holder';

type HolderTabsProps = {
  holder: HolderType;
  setHolder: (holder: HolderType) => void;
};

const HolderTabs: FC<HolderTabsProps> = ({ holder, setHolder }) => {
  const handleTabValueChange = (newHolder: string) => {
    setHolder(newHolder as HolderType);
  };

  return (
    <Tabs value={holder} onValueChange={handleTabValueChange}>
      <TabsList>
        <TabsTrigger value='stickman'>Stickman</TabsTrigger>
        <TabsTrigger value='stickcat'>Stickcat</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default HolderTabs;
