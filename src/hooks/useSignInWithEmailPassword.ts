import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import type { InferType } from 'yup';

import { PATH_PAGES } from '../constants/pathPages';
import { setCredentials } from '../redux/authSlice';
import { loginSchema } from '../schemas/validationSchemas';
import { useSignInMutation } from '../services/authApi';
import { useHandleApiError } from './useHandleApiError';
import { useTypedDispatch } from './useRedux';

type LoginFormData = InferType<typeof loginSchema>;

const useSignInWithEmailPassword = () => {
  const [signIn] = useSignInMutation();
  const dispatch = useTypedDispatch();
  const handleApiError = useHandleApiError();
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (formData: LoginFormData): Promise<void> => {
    try {
      const { token, role } = await signIn(formData).unwrap();
      dispatch(setCredentials({ token, role }));
      navigate(location.state?.from?.pathname || PATH_PAGES.MAIN);
    } catch (error) {
      handleApiError(error);
    }
  };

  return {
    form,
    onSubmit,
  };
};

export { useSignInWithEmailPassword };
