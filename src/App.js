import React ,{useRef,useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';



function App() {
  const [inputs,setinputs]=useState({
    username : '',
    email : '',
  });
  const {username , email} = inputs;
  const onChange = e => {
    const {name , value} = e.target;
    setinputs({
      ...inputs,
      [name]:value
    });
  };
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
  const nextId = useRef(4);
  const onCreate = () =>{
    setinputs({
      username : '',
      email : ''
    });
  }
  return(
    <>
      <CreateUser username = {username} email = {email} onChange = {onChange} onCreate = {onCreate}/>
      <UserList users= {users}/>
    </>
  );
}

export default App;
