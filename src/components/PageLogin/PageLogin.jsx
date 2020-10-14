import React, { useState, getUsers } from 'react';
import s from './PageLogin.module.css';
import { useHistory } from 'react-router-dom';

const PageLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submit = () => {
    fetch("http://emphasoft-test-assignment.herokuapp.com/swagger/api/v1/api-token-auth/" , {
      method: 'POST',
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
    // .then((res) => {
    //   if (res.ok) {
    //     return useHistory.push({pathname: '/users'}));
    //   }
    //   return Promise.reject(`Что-то пошло не так: ${res.status}`);
    // })
        .then(res => res.json())
        .then(() => history.push({pathname: '/users'}))
        .catch((res) => Promise.reject(`Что-то пошло не так: ${res.status}`))
  };

  return <form className={s.auth} onSubmit={submit}>
      <input
        value={login}
        onChange={event => setLogin(event.target.value)}
        name="login"
        type="text"
        placeholder='логин' required/>
      <input
        value={password}
        onChange={event => setPassword(event.target.value)}
        name='password'
        type='password'
        placeholder='пароль' required/>
      <button onClick={submit} type="submit">Вход</button>
    </form>
}

export default PageLogin;
