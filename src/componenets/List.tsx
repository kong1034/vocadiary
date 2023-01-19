import classes from '../style/list.module.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const List = () => {
    const [showCheck, setShowCheck] = useState(false);
    //의미보기
    const showMean = () => {
        setShowCheck(!showCheck);
    }
    //숙지
    const knowWord = () => {

    }
    //숙지 못함
    const unknownWord = () => {

    }
    return <>
        <section className={classes.container}>
            <ul>
                <li>
                    <p>Local</p>
                    <p className={classes.local}>{showCheck === true ? "지역" : "?" }</p>
                    <Button variant="contained" onClick={showMean} style = {{width: 450, marginTop:10}}>의미보기</Button>
                    <br/>
                    <Button variant="contained" onClick={unknownWord} style = {{width: 450, marginTop:10}}>모르겠어요</Button>
                    <br/>
                    <Button variant="contained" onClick={knowWord} style = {{width: 450, marginTop:10}}>알아요</Button>
                </li>
                <li>
                    <p>Home</p>
                    <p className={classes.local}>{showCheck === true ? "집" : "?" }</p>
                    <Button variant="contained" style = {{width: 450, marginTop:10}}>의미보기</Button>
                    <br/>
                    <Button variant="contained" style = {{width: 450, marginTop:10}}>모르겠어요</Button>
                    <br/>
                    <Button variant="contained" style = {{width: 450, marginTop:10}}>알아요</Button>
                </li>
            </ul>
        </section>
    </>
}