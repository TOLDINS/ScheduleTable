import React, {Component} from 'react';
import './Card.css'
import styled from "styled-components";

class Card_lesson extends Component {
    render(){
      
       
        const{
            subject,
            lesson_type,
            teacher1,
            teacher1_1,
            teacher2,
            teacher2_1,
            group1,
            group2,
            group3,
            group4,


        }=this.props.parameter
    
        return(
            <div className="card 2">
            <div className="card_image">          
            <Text>{(lesson_type!==undefined)?lesson_type:null}</Text>
            <Text>{(teacher1!==undefined)?teacher1:null}{(teacher1_1!==undefined)?teacher1_1:null}{(teacher2!==undefined)?teacher2:null}{(teacher2_1!==undefined)?teacher2_1:null}</Text>
            <Text>{(group1!==undefined)?group1:null}    {(group2!==undefined)?group2:null}    {(group3!==undefined)?group3:null}   {(group4!==undefined)?group4:null}  </Text>
            </div>
            <div className="card_title title-white">
                <p>{subject}</p>
            </div>
            </div>
        )
    }
}

export default Card_lesson
const Text =styled.p`
color:#31372a;
font-size:16px;
font-weight:bold;

`;
