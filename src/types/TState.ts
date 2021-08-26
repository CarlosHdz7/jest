export type TState<T> = {
  list: T | null | {},
  detail: T | null | {},
  loading: boolean,
  error: string | null,
};
