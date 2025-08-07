import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import type { InferType } from 'yup';

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
      return { success: true };
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };

      if (err.data?.message === 'Email вже використовується.') {
        form.setError('email', {
          type: 'server',
          message: 'Цей email вже використовується.',
        });
        return { success: false };
      }

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
