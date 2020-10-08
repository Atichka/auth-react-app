import React from 'react';
import s from './PageUsers.module.css';

const PageUsers = () => {
    return <table>
        <caption>Список пользователей</caption>
        <tr>
            <th>№</th>
            <th>Имя пользователя</th>
            <th>e-mail</th>
        </tr>
        <tr>
            <th>1</th>
            <th>user1</th>
            <th>user1@yandex.ru</th>
        </tr>
        <tr>
            <th>2</th>
            <th>user2</th>
            <th>user2@yandex.ru</th>
        </tr>
        <tr>
            <th>3</th>
            <th>user3</th>
            <th>user3@yandex.ru</th>
        </tr>
        {/* <tbody>{this.state.users}</tbody> */}
    </table>
}

export default PageUsers;