import React, { useEffect } from 'react';

const User = React.memo(function User( {user, onRemove, onToggle}) {
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // props로 받은 값을 -> state로
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         // setInterval, setTimeout 하던 작업을 제거 -> clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         // 뒷정리 함수
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, []);
    useEffect(()=> {
        console.log('user 값이 설정됨');
        console.log(user);
        return (() => {
            console.log('user 값이 바뀌기 전')
            console.log(user);
        })
    }, [user]);
    const {username, email, id, active} = user;


    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            {/* 새로운 함수를 만들어 준다. id를 파라미터로 받음 */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList( {users, onRemove, onToggle}) {
    

    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}/>
                    )
                )
            }
        </div>
    )
}

export default React.memo(UserList, (preProps, nextProps) => nextProps.users === preProps.users);