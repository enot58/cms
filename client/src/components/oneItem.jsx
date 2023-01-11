import React from 'react';
import {Container, Table} from "react-bootstrap";

const OneItem = ({home}) => {



    return (
            <tr>
                <td>{home.id}</td>
                <td>{home.name}</td>
                <td>{home.number}</td>
            </tr>

    );
};

export default OneItem;