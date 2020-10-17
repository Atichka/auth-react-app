import React, { useState, getUsers } from 'react';
import s from './PageLogin.module.css';
import { useHistory } from 'react-router-dom';

const PageLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submit = e => {
    e.preventDefault();
    fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/" , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
    .then(res => {
      console.log(res);
      if (res.status===200) {
        return history.push({pathname: '/users'})
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
      // .then(res => res.json())
      // .then((res) => {
      //   if (res === 200){
      //     history.push({pathname: '/users'})
      //   }
      // })
      // .catch((res) => Promise.reject(`Что-то пошло не так: ${res.status}`))
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
      <button>Вход</button>
    </form>
}

export default PageLogin;
