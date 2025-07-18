import { useNavigate } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';

type FetchError = { error: string; status: 'FETCH_ERROR' };

type HandleApiErrorFn = (error: unknown) => {
  message: string;
  isRedirected: boolean;
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const useHandleApiError = (): HandleApiErrorFn => {
  const navigate = useNavigate();

  return (error: unknown) => {
    if (
      isObject(error) &&
      'status' in error &&
      (error as FetchError).status === 'FETCH_ERROR'
    ) {
      navigate(PATH_PAGES.SERVER_ERROR);
      return {
        message: 'Сталася помилка сервера. Спробуйте пізніше.',
        isRedirected: true,
      };
    }

    if (
      isObject(error) &&
      'data' in error &&
      isObject(error.data) &&
      typeof error.data.message === 'string'
    ) {
      return { message: error.data.message, isRedirected: false };
    }

    if (error instanceof Error) {
      return { message: error.message, isRedirected: false };
    }

    return {
      message: 'Сталася невідома помилка. Спробуйте пізніше.',
      isRedirected: false,
    };
  };
};

export { useHandleApiError };
