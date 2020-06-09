import React, {Component} from 'react';
import Couples from './Couples';
import {getAllRooms} from '../src/API/fetchRequest';
import styled from "styled-components";
import Card_lesson from './Card_lesson';

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
                     <AUD>{classroom.split('*')[0]}</AUD>   
                         <Couples kaf={this.state.kaf}  room={classroom}  day={this.state.day}/>
                </div>
                
                )

        })
      

        return(
        
            <Rows num={cell_result.length+1}>
                <div>
                     <AUD>Пара</AUD>    
                     <Cells>
                     <div style={{height:"150px", textAlign:"center" ,marginBottom: "10px",padding: "10px"}}>
                         <p style={{margin:"48%",fontSize:"20px", fontWeight:"bold"}}>
                         I
                         </p>
                         </div>
                     <div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                     <p style={{margin:"48%",fontSize:"20px", fontWeight:"bold"}}>
                        II
                        </p>
                         </div>
                     <div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                        
                     <p style={{margin:"48%",fontSize:"20px", fontWeight:"bold"}}> 
                     III
                         </p>
                         </div>
                     <div style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}}>
                        
                     <p style={{margin:"48%",fontSize:"20px", fontWeight:"bold"}}> 
                      IV
                         </p>
                         </div>

                     </Cells>
                    </div>
                {cell_result}

            </Rows>

        )
    }


}
export default Cell

const AUD = styled.p`
text-align:center;

`;
const Rows=styled.div`
display: grid;
  grid-template-columns: repeat(${props => props.num},1fr);
  grid-auto-rows: 1fr;

`;

const Cells=styled.div`
display: grid;
  grid-template-rows: repeat(4, 1fr);

`;