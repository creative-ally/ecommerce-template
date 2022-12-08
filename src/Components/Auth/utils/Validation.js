import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Please enter email address'),
  password: yup.string().required('Please enter password'),
});

export const signupSchema = yup.object().shape({
  username: yup.string().required('Enter your name'),
  phone: yup.string().required('Enter your phone number'),
  email: yup.string().email().required('Please enter email address'),
  password: yup.string().required('Please enter password'),
});
