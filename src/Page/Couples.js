import React,{Component} from 'react';
import Card_lesson from './Card_lesson';
import Card_free_aud from './Card_free_aud';

import {getLessons} from '../API/fetchRequest';
import styled from "styled-components";
class Couples extends Component {
state={
    couples:[],
    lesson_view:[false,false,false,false]

}
    
  componentDidMount(){
    getLessons(this.props.kaf,this.props.day).then(res=>this.setState({couples:res}));
  }
  


    render(){
        let free={
          subject:'Вільно'
        }
        let coup=this.state.couples.filter((item)=>{
                if(item.classroom1 ===this.props.room || item.classroom2===this.props.room || item.teacher2===this.props.room ){
                  return item;
                }   
        })


    
        let replacer_array=[
          null,
          null,
          null,
          null
         
        ]
        if(coup.length===0){
          coup.push(...replacer_array);

        }
        else{
          coup.forEach(s=>{
            if(replacer_array[s.couple-1]===null){
              var {
                subject,
                lesson_type,
                teacher1, 
                teacher1_1,
                teacher2,
                teacher2_1,
                group
              }=s
              replacer_array[s.couple-1]={
                count_group:null,
                subject:null,
                group1:null,
                lesson_type:null,
                teacher1:null,
                teacher1_1:null,
                teacher2:null,
                teacher2_1:null
              }
              replacer_array[s.couple-1].count_group=1;
              replacer_array[s.couple-1].subject=subject;
              replacer_array[s.couple-1].group1=group;
              replacer_array[s.couple-1].lesson_type=lesson_type; 
              replacer_array[s.couple-1].teacher1=(teacher1!==undefined||teacher1!==null )?teacher1:null;
              replacer_array[s.couple-1].teacher1_1= (teacher1_1!==undefined||teacher1_1!==null)?teacher1_1:null;
              replacer_array[s.couple-1].teacher2=(teacher2!==undefined||teacher2!==null )?teacher2:null;
              replacer_array[s.couple-1].teacher2_1=(teacher2_1!==undefined||teacher2_1!==null)?teacher2_1:null;;
            }
            else{
              switch(replacer_array[s.couple-1].count_group) {
                case 1:
                  replacer_array[s.couple-1].count_group= replacer_array[s.couple-1].count_group+1;
                  replacer_array[s.couple-1].group2=s.group     
                break;
                case 2:
                  replacer_array[s.couple-1].count_group= replacer_array[s.couple-1].count_group+1;
                  replacer_array[s.couple-1].group3=s.group;  
                break;
                case 3:  
                replacer_array[s.couple-1].count_group= replacer_array[s.couple-1].count_group+1;
                replacer_array[s.couple-1].group4=s.group; 
                break;
              }

            }
           

          })
        }
        
        let count=0;
        let result=replacer_array.map((item)=>{
          if(item!==null){
            count+=1;
            return <Card_lesson parameter={item} count={count} first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth}/>

          }
          else{
            count+=1;
            return <Card_free_aud first={this.props.first} second={this.props.second} third={this.props.third} fourth={this.props.fourth} count={count}/>

          }
        })
       
        
        return (
                  <Cells>
                  <AUD>{this.props.room.split('*')[0]}</AUD>   
                  {result}
                  </Cells>

        )
    }

}

export default Couples;
const AUD = styled.p`
text-align:center;
color:#000000;
font-size:20px;
font-weight:800;

`;
const Cells=styled.div`
display: grid;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr;
`;