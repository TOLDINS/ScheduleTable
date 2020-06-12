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
            couple
                }=this.props.parameter
        return(
            <Card className="card 2" count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
            <div className="card_image">          
            <Text count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
                {(lesson_type!==undefined)?lesson_type:null}
                
                </Text>
            <Text count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
                    {(teacher1!==undefined)?teacher1:null}     {(teacher1_1!==undefined)?teacher1_1:null}     {(teacher2!==undefined)?teacher2:null}     {(teacher2_1!==undefined)?teacher2_1:null}
                
                </Text>
            <Text count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
                {(group1!==undefined)?group1:null}    {(group2!==undefined)?group2:null}    {(group3!==undefined)?group3:null}   {(group4!==undefined)?group4:null} 
                
                 </Text>
            </div>
            <Title count={this.props.count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}>
                <p>{subject}</p>
            </Title>
            </Card>
        )
    }
}

export default Card_lesson
const Text =styled.p`
margin:2px;
font-size:16px;

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

@media only screen and (max-width: 1024px) {
    margin:2px;
    font-size:12px;
}
`;
const Title=styled.p`
text-align: center;
border-radius: 0px 0px 40px 40px;
font-family: sans-serif;
font-weight: bold;
font-size: 26px;
margin-top: -65px;
height: 40px;
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
@media only screen and (min-width: 1025px) and (max-width: 1281px) {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1em;
    margin-top: -40px;
    height: 40px;
    font-size:20px;

}
@media only screen and (max-width: 1024px) {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1em;
    margin-top: -40px;
    height: 40px;
    font-size:16px;

}



`;
const Card =styled.div`

background: ${
    props=>props.count==1?(
        props.first?"#205D6D":
        
        "#896C9A"
        )
    :(props.count==2)?(
        props.second?"#205D6D":
        
        "#896C9A"
        )
    :(props.count==3)?(
      
        props.third?"#205D6D":
        "#896C9A"
        )
    :(props.count==4)?(
        
        props.fourth?"#205D6D":
        "#896C9A"
        ):""

};
float: left;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 20px;

    padding: 10px;
    width: 80%;
    height: 150px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    @media only screen and (max-width: 1281px) {
        height:100px;      
        margin-bottom: 2.5px;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.4s;
        padding: 10px;
        margin-top:2.5px;
    width: 80%;
    }
   
`;
