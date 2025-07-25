import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/[A-Za-z]/, 'Password must include at least one letter'),
});

export default validationSchema;
