import { useGoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';
import { setCredentials } from '../redux/authSlice';
import { useSignInWithGoogleMutation } from '../services/authApi';
import { useHandleApiError } from './useHandleApiError';
import { useTypedDispatch } from './useRedux';

type UseSignInWithGoogleReturn = {
  loginWithGoogle: () => void;
};

const useSignInWithGoogle = (): UseSignInWithGoogleReturn => {
  const [signInWithGoogle] = useSignInWithGoogleMutation();
  const handleApiError = useHandleApiError();
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (tokenResponse: {
    access_token: string;
  }): Promise<void> => {
    try {
      const accessToken = tokenResponse.access_token;
      if (!accessToken) return;
      const { token, role } = await signInWithGoogle({ accessToken }).unwrap();
      dispatch(setCredentials({ token, role }));
      navigate(location.state?.from?.pathname || PATH_PAGES.MAIN);
    } catch (error) {
      handleApiError(error);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    scope: 'openid email profile',
    flow: 'implicit',
    onSuccess: handleGoogleSuccess,
  });

  return { loginWithGoogle };
};

export { useSignInWithGoogle };
