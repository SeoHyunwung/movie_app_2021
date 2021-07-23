import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList (){
    const users = [
        {
            id : 1,
            username : 'HYUN',
            email : 'sddsk1123@naver.com',
        },
        {
            id : 2,
            username : 'MinSuk',
            email : 'hee7411@naver.com',
        },
        {
            id : 3,
            username : 'Ini',
            email : 'Ini@naver.com',
        }
    ];
    return (
        <div>
            {
                users.map(
                    (user)=> (<User user ={user} key = {user.id} />)
                )
            }
        </div>
        
    )
}
export default UserList;