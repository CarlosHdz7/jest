/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../../hooks/useLocalStorage';

describe('testing useLocalStorage', () => {
  test('get default value localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test', []));
    const [state] = result.current;
    expect(state).toEqual([]);
  });

  test('get value localStorage', () => {
    localStorage.setItem('test', 'Hello world');
    const { result } = renderHook(() => useLocalStorage('test', 'Hello world'));
    const [state] = result.current;
    expect(state).toEqual('Hello world');
  });

  test('set value localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'Hello world'));
    const [, setState] = result.current;
    act(() => {
      setState('Hello test');
    });
    const [state2] = result.current;
    expect(state2).toEqual('Hello test');
  });

  test('set function value localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'Hello world'));
    const [, setState] = result.current;
    act(() => {
      setState(() => 'Hello test');
    });
    const [state2] = result.current;
    expect(state2).toEqual('Hello test');
  });
});
