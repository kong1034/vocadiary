import classes from '../style/login.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export const Login = () => {
    return <>
        <section className={classes.container}>
            <div className={classes.border}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <p>영단어 반복암기</p>
                    </li>
                    <li className={classes.li}>
                        <TextField 
                        size='small' 
                        InputProps={{ classes: {
                                        input: classes.resize,
                                        },
                                    }}
                        placeholder="ID 입력해주세요. (영문+숫자 8자 이상)"
                        style = {{width: 450}}
                        autoFocus
                        color='primary'
                        />
                    </li>
                    <li className={classes.li}>
                        <TextField 
                        size='small' 
                        InputProps={{ classes: {
                                        input: classes.resize,
                                        },
                                    }}
                        placeholder="PW 입력해주세요. (영문+숫자 8자 이상)"
                        style = {{width: 450}}
                        color='primary'
                        type='password'
                        />
                    </li>
                    <li className={classes.li}>
                        <Button
                            variant="outlined"
                            size='medium'
                            style = {{width: 450, marginTop:30}}
                        >로그인</Button>
                        <Link to="/signup" className={classes.link}>
                            <Button
                                variant="contained"
                                size='medium'
                                style = {{width: 450, marginTop:10}}
                            >회원가입</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}