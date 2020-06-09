import React, {Component} from 'react';
import Couples from './Couples';
import {getAllRooms} from '../src/API/fetchRequest';
import styled from "styled-components";
import Card_lesson_on_other from './Card_lesson_on_other';

class Cell extends Component{
 state={
     classrooms:[],
     couples:[],
     kaf:this.props.match.params.kaf,
     day:this.props.match.params.day
 }
 componentDidMount(){
        getAllRooms(this.state.kaf).then(res=>this.setState({classrooms:res}));
}    



    render(){
        console.log(this.state.classrooms);
        
      

       let cell_result=this.state.classrooms.map((classroom)=>{


                return (
                <div>
                    
                         <Couples kaf={this.state.kaf}  room={classroom}  day={this.state.day}/>
                </div>
                
                )

        })
      

        return(
        <div>
            <Rows num={cell_result.length+1}>
                <div>
                     
                     <Cells>
                     <AUD>Пара</AUD>    
                     <Div style={{height:"150px", textAlign:"center" ,marginBottom: "10px",padding: "10px"}}>
                         <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#ffffff"}}>
                         I
                         </p>
                         </Div>
                     <Div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#ffffff"}}>
                        II
                        </p>
                         </Div>
                     <Div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                        
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#ffffff"}}> 
                     III
                         </p>
                         </Div>
                     <Div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                        
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#ffffff"}}> 
                      IV
                         </p>
                         </Div>

                     </Cells>
                    </div>
                {cell_result}

            </Rows>
           
           <Lesson_on_other>
               <Card_lesson_on_other></Card_lesson_on_other>
               <Card_lesson_on_other></Card_lesson_on_other>
               <Card_lesson_on_other></Card_lesson_on_other>
               <Card_lesson_on_other></Card_lesson_on_other>


           </Lesson_on_other>
            </div>
        )
    }


}
export default Cell

const Lesson_on_other=styled.div`
width:100%;
display: grid;
  grid-template-columns: repeat(6,1fr);
`;

const AUD = styled.p`
text-align:center;
color:#ffffff;
font-size: 20px;
`;
const Rows=styled.div`
display: grid;
  grid-template-columns: repeat(${props => props.num},1fr);

`;

const Cells=styled.div`
display: grid;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr;

`;
const Div=styled.div`
float: left;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    margin-top: 20px;
    width: 80%;
    height: 150px;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s;`;