import React, {Component} from 'react';
import './Card.css'
import styled from "styled-components";

class Card_lesson extends Component {
    
    render(){
        const{
            subject,
            lesson_type,
            classroom1,
            classroom2,
            teacher1,
            teacher1_1,
            teacher2,
            teacher2_1,
            group,
            group1,
            group2,
            group3,
            group4,
            couple

        }=this.props.parameter
const classrooms=this.props.classrooms
        return(
            <td>
            <Card>
                <Columns>
                <Couple>{couple}</Couple>
                <div>
                <Rows>
                <A>{(group!==undefined && group!==null)?group:null}
                    {(group1!==undefined && group1!==null)?group1:null}
                    {(group2!==undefined && group2!==null)?group2:null} 
                    {(group3!==undefined && group3!==null)?group3:null}
                  </A>
                    <A>{(teacher1!== undefined && teacher1!==null)?teacher1:null} 
                {(teacher1_1!== undefined && teacher1_1!==null)?teacher1_1:null}
                {(teacher2!== undefined && teacher2!==null)?teacher2:null}
                {(teacher2_1!== undefined && teacher2_1!==null)?teacher2_1:null}
                </A>
                
                </Rows>
                <Rows>
                <A>{(classroom1!==undefined && classroom1!==null)?((classrooms.filter(el=>el===classroom1).lenght>=0)?null:classroom1):null}
                  </A>
                  <A>{(classroom2!==undefined && classroom2!==null)?classroom2.split('*')[0]:null}   
                  </A>
                </Rows>
                </div>
                <Title>{subject}</Title>
                </Columns>
            </Card>
            </td>
        )
    }
}

export default Card_lesson
const Couple=styled.p`
color: #282d22;
font-family: sans-serif;    
padding: 5px;
`;
const A=styled.a`
margin:2px;
`;
const Columns=styled.div`
margin:3px;
display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;
const Rows=styled.div`
display: grid;
  grid-template-columns: repeat(2,1fr);
height:20px;
margin-top:5px;
`;
const Title=styled.p`
font-size:20px;
color: #282d22;
margin-left:10px;
font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
`;
const Card=styled.div`
float: left;
    margin: auto;
    margin-bottom: 10px;
    padding: 5px;
    margin-top: 20px;
    background-color: #dfd7cc;
    width: 80%;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    display: flex;
align-items: center;
justify-content: center;
`;
