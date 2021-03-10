import React from 'react';
import Counter from './Counter';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Wrapper from './Wrapper';

function App() {
  return (
      // {/* isSpecial에 default값은 true이다. */}
      <Counter />
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