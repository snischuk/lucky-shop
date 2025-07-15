import type { NavigateFunction } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';

interface ApiErrorResponse {
  data: {
    message: string;
  };
}

interface RTQFetchError {
  status: string;
  error: string;
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isFetchError = (error: unknown): error is RTQFetchError => {
  if (!isObject(error)) return false;
  const status = (error as Record<string, unknown>)['status'];
  return typeof status === 'string' && status === 'FETCH_ERROR';
};

const hasDataMessage = (error: unknown): error is ApiErrorResponse => {
  if (!isObject(error)) return false;
  const data = (error as Record<string, unknown>)['data'];
  if (!isObject(data)) return false;
  const message = data['message'];
  return typeof message === 'string';
};

const handleApiError = (
  error: unknown,
  navigate: NavigateFunction,
): string | void => {
  if (isFetchError(error)) {
    navigate(PATH_PAGES.SERVER_ERROR);
    return;
  }

  if (hasDataMessage(error)) {
    return error.data.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Сталася помилка. Спробуйте пізніше.';
};

export { handleApiError, hasDataMessage, isFetchError, isObject };
