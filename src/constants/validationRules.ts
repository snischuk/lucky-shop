// Constants for email validation rules
export const EMAIL_MIN_LENGTH = 14;
export const EMAIL_MAX_LENGTH = 72;

// Email format: [name]@[domain].com
// The [name] part accepts Latin letters, digits, and special characters: plus (+), hyphen (-), underscore (_), dot (.)
export const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.(com)$/;

// Constants for password validation rules
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 30;
// Password must contain at least one uppercase letter, one digit, and one special character
export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

// Constants for name validation rules
export const NAME_MAX_LENGTH = 15;
// Name can contain Latin and Cyrillic letters, hyphens, and spaces
export const NAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
