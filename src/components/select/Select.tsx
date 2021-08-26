import React from 'react';
import { ISelect } from '../../interfaces/ISelect';
import { TSelectItem } from '../../types/TSelectItem';

const Select = ({
  data, defaultValue, title, customClass, selectRef, onChange,
}: ISelect) => (
  <select
    defaultValue={defaultValue}
    className={customClass}
    ref={selectRef}
    onChange={onChange}
  >
    <option value="">
      {title}
    </option>
    {data?.map((item: TSelectItem) => (
      <option value={item.key} key={item.key}>{item.value}</option>))}
  </select>
);

export default Select;
