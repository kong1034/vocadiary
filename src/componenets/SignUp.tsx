import classes from '../style/signup.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export const SignUp = () => {
    return <>
        <section className={classes.container}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <p>회원가입</p>
                </li>
                <li className={classes.li}>
                    <TextField 
                    placeholder='아이디 입력해주세요. (영문 + 숫자 8자 이상)'
                    style = {{width: 450}}
                    ></TextField>
                </li>
                <li className={classes.li}>
                    <TextField 
                    type='password' 
                    placeholder='패스워드 입력해주세요. (영문 + 숫자 8자 이상)'
                    style = {{width: 450}}
                    ></TextField>
                </li>
                <li className={classes.li}>
                    <TextField 
                    placeholder='이름을 입력해주세요. (영문 또는 한글로 입력해주세요.)'
                    style = {{width: 450}}
                    ></TextField>
                </li>
                <li className={classes.li}>
                    <Button variant="contained" style = {{width: 450, marginTop:10}}>회원가입</Button>
                    <Link to="/" className={classes.link}>
                        <Button variant="outlined" style = {{width: 450, marginTop:10}}>뒤로가기</Button>
                    </Link>
                </li>
            </ul>
        </section>
    </>
}