import * as Yup from 'yup';

const validationSchemaSignUp = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)
    .required('Email is required')
    .label('Email'),
  name: Yup.string().min(2).required('Name is required').label('Name'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .required('Password is required')
    .label('Password'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Repeat Password is required')
    .label('Repeat Password'),
  avatar: Yup.string().url('Photo must be a valid URL'),
});

export default validationSchemaSignUp;
