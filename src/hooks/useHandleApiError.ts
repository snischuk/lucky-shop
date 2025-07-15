import { useNavigate } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';

interface ApiErrorResponse {
  data: {
    message: string;
  };
}

interface FetchError {
  error: string;
  status: string;
}

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const isFetchError = (error: unknown): error is FetchError => {
  return (
    isObject(error) &&
    'status' in error &&
    (error as Record<string, unknown>).status === 'FETCH_ERROR'
  );
};

const hasDataMessage = (error: unknown): error is ApiErrorResponse => {
  if (
    isObject(error) &&
    'data' in error &&
    isObject((error as Record<string, unknown>).data)
  ) {
    const data = (error as { data: Record<string, unknown> }).data;
    return typeof data.message === 'string';
  }
  return false;
};

const useHandleApiError = () => {
  const navigate = useNavigate();

  return (error: unknown): { message: string; isRedirected: boolean } => {
    if (isFetchError(error)) {
      navigate(PATH_PAGES.SERVER_ERROR);
      return {
        message: 'Сталася помилка сервера. Спробуйте пізніше.',
        isRedirected: true,
      };
    }

    if (hasDataMessage(error)) {
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
