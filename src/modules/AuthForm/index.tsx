import React, { FC, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import styled from '@emotion/styled';

const Root = styled.div`
  label {
    margin-right: 5px;
  }

  button {
    margin: 5px;
  }

  input {
    margin-right: 30px;
    width: 100px;
  }

  form {
    font-size: 14px;
    margin: 3vh 0;
  }
`;

export interface IUserFormProps {
  onSubmit: (values: IAuthData) => void;
}

export type IAuthData = {
  login: string;
  password: string;
};

const AuthForm: FC<IUserFormProps> = ({ onSubmit }) => {
  const [authData, setAuthData] = useState<IAuthData>({ login: '', password: '' });

  useEffect(() => {});

  const handleSubmit = () => {
    onSubmit({ ...authData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setAuthData({ ...authData, [id]: value });
  };

  return (
    <Root role="authForm">
      <Formik initialValues={{ ...authData }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="login">Имя</label>
          <Field
            role="login"
            id="login"
            name="login"
            placeholder="Введите логин"
            value={authData.login}
            onChange={handleChange}
          />

          <label htmlFor="password">Пароль</label>
          <Field
            role="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            value={authData.password}
            onChange={handleChange}
          />

          <button role="buttonLogin" disabled={!authData.login || !authData.password} type="submit">
            Войти
          </button>
        </Form>
      </Formik>
    </Root>
  );
};

export default AuthForm;
