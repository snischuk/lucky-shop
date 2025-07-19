import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  sub: string;
};

export const getEmailFromJWT = (token?: string): string | null => {
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token).sub;
  } catch {
    return null;
  }
};
