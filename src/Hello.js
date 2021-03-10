import React from 'react';

// 함수형태로 작성
// 인자를 props로 한번에 쓸수도 있고 분해를 해서 받을 수도 있다.
function Hello({ color, name, isSpecial }) {

    return (

        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            {/* null이나 undefine 등은 {}를 사용할 수 없다. */}
            안녕하세요. {name}
            
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
};
export default Hello;