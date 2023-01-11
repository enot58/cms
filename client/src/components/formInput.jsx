import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setNameHome } from "../features/home/homeSlice.js";

const FormInput = () => {
    // Хук позволяется вызывать экшены
    const dispatch = useDispatch()
    //const [firstname, setFirstname] = useState('')
    //const [lastname, setLastname] = useState('')
    const [name, setName] = useState('')
    //const [age, setAge] = useState('')
    const [number, setNumber] = useState('')

    

    const addNewHome = (e) => {
        e.preventDefault()
        /*console.log({
            firstname: firstname,
            lastname: lastname,
            age: age
        })*/
        /*console.log({
            name: name,
            number: number
        })*/
        axios.post('http://localhost:7777/api/test', {
            name: name,
            //number: number
        }).then((res) => {
            console.log(res.data)
        })


    }

    return (
        <div>
            <Container className="mt-3">
                <form method="POST">
                    {/*<input type="text" name="firstname"
                           value={firstname}
                           onChange={e => setFirstname(e.target.value)}
                           placeholder="Имя"/>*/}
                    <input type="text"
                           name='name'
                           //value={name}
                           onChange={e => setNameHome(e.target.value)}
                           //onChange={e => useDispatch(setNameHome(e.target.value))}
                           placeholder="Наименование дома"/>
                    <input type="number"
                           name="number"
                           //value={number}
                           //onChange={e => setNumber(e.target.value)}
                           placeholder="Номер дома"/>
                    <button onClick={addNewHome} type="submit">Добавить</button>
                </form>

                {name}
            </Container>

        </div>
    );
};

export default FormInput;