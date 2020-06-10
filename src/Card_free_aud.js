import React, {Component} from 'react';
import './Card.css'
import styled from "styled-components";

class Card_lesson extends Component {
    render(){
    
        return(
            <Card count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
                <Title count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>Вiльно</Title>
            </Card>
        )
    }
}

export default Card_lesson
const Title=styled.p`
font-size:20px;
color: ${
    props=>props.count==1?(
        props.first?"#fff":
        
        "#000000"
        )
    :(props.count==2)?(
        props.second?"#fff":
        
        "#000000"
        )
    :(props.count==3)?(
      
        props.third?"#fff":
        "#000000"
        )
    :(props.count==4)?(
        
        props.fourth?"#fff":
        "#000000"
        ):"#000000"

};
font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
`;
const Card=styled.div`
background-color:${
    props=>props.count==1?(
        props.first?"#205D6D":
        
        "#A86086"
        )
    :(props.count==2)?(
        props.second?"#205D6D":
        
        "#A86086"
        )
    :(props.count==3)?(
      
        props.third?"#205D6D":
        "#A86086"
        )
    :(props.count==4)?(
        
        props.fourth?"#205D6D":
        "#A86086"
        ):""

};
box-shadow: 0px 0px 10px 10px rgba(253, 0, 219, 0.25);

float: left;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    margin-top: 20px;
    
    width: 80%;
    height: 150px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    display: flex;
align-items: center;
justify-content: center;
`;
