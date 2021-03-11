import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            // ... 을 이용하여 객체를 복사(spread 문법)
            ...inputs,
            [name]: value,
        });
    };

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: '',
        });
        // 사용했을때, 초기화를 누르면, 커서가 이동이 됨.
        nameInput.current.focus();
    };
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name} 
                ref={nameInput}
                />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset} >초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;