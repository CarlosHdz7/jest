/* eslint-disable no-unused-vars */
export interface IPagination {
  currentPage: number,
  perPage: number,
  total: number,
  paginate: (arg: number) => void
}
