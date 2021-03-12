import React, {useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

// import Counter from './Counter';
// import InputSample from './InputSample';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Wrapper from './Wrapper';
function countActiveUsers (users) {
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}
function App() {
  const [ inputs, setInputs] = useState( {
    username: "",
    email: "",
  });
  const { username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    // pusr를 사용하면 안됨... 업데이트가 되지 않음....ㅠㅠㅠ
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      usernae: '',
      email: ''
    });
    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  const onRemove = id => {
    // 만족을 하면 새로운 배열을 생성, 그렇지 않다면 배열에 넣지 않는다.
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
      // 기존의 내용을 수정할때, 전체를 다 수정하는 것이 아닌 덮어 씌워주는 형태로 수정을 하게 된다.
      ? { ...user, active: !user.active }
      : user
    ));
  }

  const count = useMemo( () =>countActiveUsers(users), [users]);
  return (
      // {/* isSpecial에 default값은 true이다. */}
      <>
        <CreateUser 
          username={username} 
          email={email} 
          onChange={onChange} 
          onCreate={onCreate} 
        />
        <UserList users={users}  onRemove={onRemove} onToggle={onToggle}/>
        <div>활성 사용자 수: {count}</div>
      </>
  );
}

export default App;


// /* 
//       // JSX의 조건!
//       // 1. 태그를 다아줘야 한다.
//       // {/* // <div x / <div> o
//       // 2. 두개 이상의 태그는 하나의 태그로 감싸야 한다.
//       // <div> <Hello /> <div> 안녕하세요.</div> </div>
//       // fragment "<>"를 사용 <> <Hello /> <div> 안녕하세요.</div> </> 위 아래는 동일...
//       // 3. JSX 내부에서 jsp를 사용하는 방법
//       // <div>{name}</div> -> {}를 사용하면 된다.
//       // 4. style과 className을 사용하는 방법
//       // const style = {} 라는 객체를 작성해야 함. -이 들어간 속성은 CamelCase 사용 ex) backgroundColor로
//       // class를 사용해도 되지만 className을 사용하는 것을 권장
//       // 주석은 보통 // 으로 작성 또는 이 조건을 감싸고 있는 조건을 사용
    
// */