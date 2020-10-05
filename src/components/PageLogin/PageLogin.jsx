import React from 'react';
import s from './PageLogin.module.css';

const PageLogin = () => {
    return <form className={s.auth}> 
            <input name="login" type="text" validations={{minLength: 5}} validationErrors={{minLength: 'Введите минимум 5 символов'}} required/>
            <input type='password' name='password' placeholder='пароль' validations={{minLength: 5}} validationErrors={{minLength: 'Введите минимум 5 символов'}} required/>
            <button>Вход</button>
        </form>
}

export default PageLogin;