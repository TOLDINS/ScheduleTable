import React, {Component} from 'react';
import Couples from './Couples';
import {getAllRooms} from '../API/fetchRequest';
import styled from "styled-components";
import Card_lesson_on_other from './Card_lesson_on_other';

class Change_kafedra_day extends Component{

    route(){
      let kaf =  document.getElementById('caf')
      let day =  document.getElementById('day')
      if(kaf.value!=="0"&&day.value!=="0")
      {
        window.open(`/cafedra/${kaf.value}/${day.value}`)
      }else{
        if(kaf.value!=="0")
        {
            alert("Виберiть кафедру");
        }
        if(day.value!=="0")
        {
            alert("Виберiть день тижня");
        }
        else{
            alert("Виберiть кафедру та день тижня");

        }
    }
    }
    render(){
        return(
        <Div>
            <Form>
                <Span>
                    Ласкаво просимо
                </Span>
                <Span>
                    Вкажiть свою кафедру
                </Span>
                <Select>
      <Selecter id={"caf"}>
    <option value="0">Вибiр кафедри:</option>
    <option value="1">Кафедра №1</option>
    <option value="2">Кафедра №2</option>
    <option value="3">Кафедра №3</option>
    <option value="4">Кафедра №4</option>
    <option value="5">Кафедра №5</option>
    <option value="6">Кафедра №6</option>
    <option value="11">Кафедра №11</option>
    <option value="12">Кафедра №12</option>
    <option value="13">Кафедра №13</option>
    <option value="21">Кафедра №21</option>
    <option value="22">Кафедра №22</option>
    <option value="23">Кафедра №23</option>
    <option value="31">Кафедра №31</option>
    <option value="32">Кафедра №32</option>
    <option value="33">Кафедра №33</option>
    </Selecter>
  </Select>
    <Span>
        Вкажiть день тижня
    </Span>
  <Select>
      <Selecter id={"day"}>
    <option value="0">Вибiр дня тижня:</option>
    <option value="1">Понедiлок</option>
    <option value="2">Вiвторок</option>
    <option value="3">Середа</option>
    <option value="4">Четверг</option>
    <option value="5">П`ятниця</option>
    <option value="6">Субота</option>
 
    </Selecter>
  </Select>
            <Button onClick={this.route}>Перейти до розкладу</Button>
            </Form>


        </Div>
        
        )
    }
}
export default Change_kafedra_day
const Button=styled.button`
    width: 250px;
    height: 50px;
    display: block;
    margin: auto;
    border-radius:20px;
    background:#dfd7cc;
    color: #31372a;
    font-size:20px;
   
    `;

const Select =styled.div`
width: 300px;
    height: 50px;
    
    display: block;
    margin: auto;
    padding-bottom: 26px;

        `;
        const Selecter =styled.select`
width: 300px;
    height: 50px;
    border-radius:10px;
    display: block;
    margin: auto;
    background:#dfd7cc;
    color: #31372a;
    font-size:20px;
        `;
const Span =styled.span`
display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #31372a;
    line-height: 1.2;
    font-weight:bold;
    text-align: center;
    padding-bottom: 26px;
    `;
const Div =styled.div`
width: 98%;
min-height: 94vh;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 15px;
background: #474f3f;
`;
const Form=styled.div`
width: 390px;
background: #dfd7cc;
border-radius: 10px;
overflow: hidden;
padding: 77px 55px 33px 55px;
box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
-o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
-ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);`;