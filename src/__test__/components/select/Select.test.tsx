/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import Select from '../../../components/select/Select';
import '@testing-library/jest-dom';
import selectItemsMock from '../../mocks/selectItems';

describe('testing select', () => {
  test('should display Select option message', () => {
    const { result } = renderHook(() => useRef());
    const onChange = jest.fn();

    const { getByText } = render(<Select
      data={selectItemsMock}
      defaultValue=""
      title="Select a option"
      customClass="select-test"
      selectRef={result.current}
      onChange={onChange}
    />);

    expect(getByText('Select a option')).toBeInTheDocument();
  });

  test('should simulates selection', () => {
    const { result } = renderHook(() => useRef());
    const onChange = jest.fn();

    const {
      container, getAllByRole,
    } = render(<Select
      data={selectItemsMock}
      defaultValue=""
      title="Select a option"
      customClass="select-test"
      selectRef={result.current}
      onChange={onChange}
    />);

    fireEvent.click(container.getElementsByClassName('select-test')[0], { target: { value: '2' } });
    const options: any = getAllByRole('option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
  });
});
