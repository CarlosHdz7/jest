import { MutableRefObject } from 'react';
import { TSelectItem } from '../types/TSelectItem';

export interface ISelect{
  data: Array<TSelectItem>,
  defaultValue: string,
  customClass: string,
  title: string,
  selectRef: MutableRefObject<HTMLSelectElement>
  onChange: () => void
}
