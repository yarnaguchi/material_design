import { Dispatch, SetStateAction } from 'react';

export type PageProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export type WorkRecord = {
  title: string;
  description: string;
  url: string;
  tags?: string[];
  wip?: boolean;
};
