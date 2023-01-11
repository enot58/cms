import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import OneItem from "./oneItem";
import {useSelector} from "react-redux";
const ListItem = () => {

    const name = useSelector((state) => state.home.nameHome)

    /*const [home] = useState([
        {
            id: 1,
            name: 'Любое',
            number: 28
        },
        {
            id: 2,
            name: 'gfhd',
            number: 285
        },
        {
            id: 3,
            name: 'gfhd3234',
            number: 2854
        }
    ])*/
    const [home, setHome] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7777/api/test')
            .then((res) => {
                setHome(res.data)
                console.log(res.data)
            }).catch((err) => {
            if (err)  console.log(err)


        })
    }, [])

    return (
        <Container className="mt-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Наименование</th>
                    <th>Номер</th>
                </tr>
                </thead>
                <tbody>

                    {
                        home.map((data) =>
                            <OneItem key={data.id} home={data}/>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ListItem;