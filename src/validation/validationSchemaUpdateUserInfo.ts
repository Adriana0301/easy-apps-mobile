import * as Yup from 'yup';

const validationSchemaUpdateUserInfo = Yup.object().shape({
  username: Yup.string().required().min(2).label('Username'),
});

export default validationSchemaUpdateUserInfo;
