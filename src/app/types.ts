import type { NextPage } from 'next';

export type PageParams<T extends Record<string, string>> = {
  params: T;
};

export type PageSearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};