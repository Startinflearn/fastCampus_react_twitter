import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";

const SignupForm = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [error, setError] = useState<string>("")

    const onSubmit = () => {

    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value},
        } = e;
        console.log(name)

    }
    return (
        <form className="form form--lg" onSubmit={onSubmit}>
            <div className="form__title">회원가입</div>
            <div className="form__block">
                <div className="email">이메일</div>
                <input type="text" name="email" id="email" value={email} required onChange={onChange}/>
            </div>
            <div className="form__block">
                <div className="password">비밀번호</div>
                <input type="password" name="password" id="password" value={password} required onChange={onChange}/>
            </div>
            <div className="form__block">
                <div className="password_cofirmation">비밀번호확인</div>
                <input type="password" name="password_cofirmation" id="password_cofirmation"
                       value={passwordConfirmation} required onChange={onChange}/>
            </div>
            {error && error?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{error}</div>
                </div>
            )}
            <div className="form__block">
                계정이 있으신가요?
                <Link to="/login" className="form__link">로그인하기</Link>
            </div>
            <div className="form__block">
                <button type="submit" className="form__btn--submit" disabled={error?.length > 0}>회원가입</button>
            </div>
        </form>
    );
};

export default SignupForm;