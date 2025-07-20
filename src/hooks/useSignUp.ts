import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import type { InferType } from 'yup';

import { PATH_PAGES } from '../constants/pathPages';
import { setCredentials } from '../redux/authSlice';
import { registerSchema } from '../schemas/validationSchemas';
import { useSignUpMutation } from '../services/authApi';
import { useHandleApiError } from './useHandleApiError';
import { useTypedDispatch } from './useRedux';

type RegisterFormData = InferType<typeof registerSchema>;

const useSignUp = () => {
  const [signUp] = useSignUpMutation();
  const dispatch = useTypedDispatch();
  const handleApiError = useHandleApiError();
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      isPolicyAccepted: false,
      isSubscribeToAds: false,
    },
  });

  const onSubmit = async (
    formData: RegisterFormData,
  ): Promise<{ success: boolean }> => {
    try {
      const cleanDataToSend = { ...formData };
      delete cleanDataToSend.isPolicyAccepted;
      delete cleanDataToSend.confirmPassword;
      const { token, role } = await signUp(cleanDataToSend).unwrap();
      dispatch(setCredentials({ token, role }));
      navigate(location.state?.from?.pathname || PATH_PAGES.MAIN);
      return { success: true };
    } catch (error) {
      handleApiError(error);
      return { success: false };
    }
  };

  return {
    form,
    onSubmit,
  };
};

export { useSignUp };
