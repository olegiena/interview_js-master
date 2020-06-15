
const REGEX = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
};

const required = value => value ? undefined : 'Required';
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(6);
const email = value =>
  value && !REGEX.email.test(value) ?
    'Invalid email address' : undefined;

export {
  required, minLength6, email
};
