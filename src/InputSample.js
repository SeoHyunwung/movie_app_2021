import React, {useState, useRef} from 'react';


function InputSample(){
    const [inputs,setInputs] = useState({ // 초기 입력 창
        name:'',
        nickname:'',
    })
    const nameInput = useRef();
    const {name,nickname} = inputs; // 네임과 닉 네임을 inputs라는 객체에 담음
    const onChange = (e) =>{     // 바뀔 함수 설정
        const {name,value} = e.target; // 
        setInputs({
            ...inputs,
            [name] : value
        })
    }
    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        })
        nameInput.current.focus();
    };
    return(
        <div>
            <input name = 'name'
            placeholder = '이름'
            onChange = {onChange}
            value = {name}
            ref = {nameInput}
            />
            <input name = 'nickname'
            placeholder = '닉네임'
            onChange = {onChange}
            value = {nickname}/>
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname}
            </div>
        </div>
    )
}

export default InputSample;