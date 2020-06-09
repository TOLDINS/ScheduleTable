import React, {Component} from 'react';
import './Card.css'
import styled from "styled-components";

class Card_lesson extends Component {
    render(){
        return(
            <Card>
                <Title>Вiльно</Title>
            </Card>
        )
    }
}

export default Card_lesson
const Title=styled.p`
font-size:20px;
color: #ffffff;
font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
`;
const Card=styled.div`
float: left;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    margin-top: 20px;
    background-color: #aba597;
    width: 80%;
    height: 150px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    display: flex;
align-items: center;
justify-content: center;
`;
