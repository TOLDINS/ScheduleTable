import React, {Component} from 'react';
import Couples from './Couples';
import {getAllRooms,getAnyCouples} from '../API/fetchRequest';
import styled from "styled-components";
import Card_lesson_on_other from './Card_lesson_on_other';

class Cell extends Component{
   
 state={
    time: new Date(),
     classrooms:[],
     any_couples:[],
     couples:[],
     kaf:this.props.match.params.kaf,
     day:this.props.match.params.day,
     first:false,
     second:false,
     third:false,
     fourth:false
 }
 componentDidMount(){
        getAllRooms(this.state.kaf).then(res=>this.setState({classrooms:res}));
        getAnyCouples(this.state.kaf,this.state.day).then(res=>this.setState({any_couples:res}))
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
            if((this.state.time.getHours()===9)||(this.state.time.getHours()===10&&this.state.time.getMinutes()<=35))
            {
                this.setState({
                    first:true,
                    second:false,
                    third:false,
                    fourth:false
                });
            }else if((this.state.time.getHours()===11)||(this.state.time.getHours()===10&&this.state.time.getMinutes()>=50)||(this.state.time.getHours()===12&&this.state.time.getMinutes()<=25))
            {
                this.setState({
                    first:false,
                    second:true,
                    third:false,
                    fourth:false
                });
            }
            else if((this.state.time.getHours()===13)||(this.state.time.getHours()===14&&this.state.time.getMinutes()>=15)||(this.state.time.getHours()===12&&this.state.time.getMinutes()>=40))
            {
                this.setState({
                    first:false,
                    second:false,
                    third:true,
                    fourth:false
                });
            }
            else if((this.state.time.getHours===16)||(this.state.time.getHours===15&&this.state.time.getMinutes>=45)||(this.state.time.getHours===17&&this.state.time.getMinutes<=20))
            {
                this.setState({
                    first:false,
                    second:false,
                    third:false,
                    fourth:true
                });
            }
            

        }, 1 * 1000);
}    
componentWillUnmount() { // delete the interval just before component is removed
    clearInterval(this.update);
}


    render(){
        
      

       let cell_result=this.state.classrooms.map((classroom)=>{


                return (
                <div>
                    
                         <Couples kaf={this.state.kaf}  room={classroom}  day={this.state.day} first={this.state.first} second={this.state.second} third={this.state.third} fourth={this.state.fourth} time={this.state.time}/>
                </div>
                
                )

        })
        let any_result=[];
        if( this.state.any_couples.length!==0){
            any_result=this.state.any_couples.map(item=>{
                return (
                <Card_lesson_on_other parameter={item} classrooms={this.state.classrooms}/>
                )
              
            })

        }
        else{
            any_result=[];
        }
       
        const { time } = this.state; // retrieve the time from state


        return(
        <Dive>
            <div num={cell_result.length+1} style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)"}}>
                <div>
                     
                     <Cells>
                     <AUD>
                         <p style={{fontWeight:"800"}}>{time.toLocaleDateString()}</p>
                        <p style={{fontWeight:"800"}}>{time.toLocaleTimeString()}</p>
            
                         </AUD>    
                     <First style={{height:"150px", textAlign:"center" ,marginBottom: "10px",padding: "10px"}} bol={this.state.first}>
                         <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#000000"}}>
                         I
                         </p>
                         </First>
                     <Second style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}} bol={this.state.second}>
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#000000"}}>
                        II
                        </p>
                         </Second>
                     <Third style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}} bol={this.state.third}>
                        
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#000000"}}> 
                     III
                         </p>
                         </Third>
                     <Fourth style={{height:"150px", textAlign:"center",marginBottom: "10px",padding: "10px"}} bol={this.state.fourth}>
                        
                     <p style={{margin:"70px",fontSize:"20px", fontWeight:"bold",color:"#000000"}}> 
                      IV
                         </p>
                         </Fourth>

                     </Cells>
                    </div>
                {cell_result}

            </div>
           
           <Lesson_on_other>
               
               {any_result}

           </Lesson_on_other>
            </Dive>
        )
    }


}
export default Cell

const Dive =styled.div`
width: 98%;
min-height: 90vh;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background: rgb(167,167,167);
background: linear-gradient(90deg, rgba(167,167,167,1) 0%, rgba(199,199,246,1) 0%, rgba(117,223,245,1) 100%);
`;
const Lesson_on_other=styled.div`
width:100%;
display: grid;
  grid-template-columns: repeat(5,1fr);
`;

const AUD = styled.div`
text-align:center;
color:#000000;
font-size: 20px;
display: grid;
grid-template-columns: repeat(2,1fr);
`;
const Rows=styled.div`
display: grid;
  grid-template-columns: repeat(${props => props.num},1fr);

`;

const Cells=styled.div`
display: grid;

`;
const First=styled.div`
background:${props=>props.bol?"#205D6D":""};
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
    const Second=styled.div`
    background:${props=>props.bol?"#205D6D":""};

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
    const Third=styled.div`
    background:${props=>props.bol?"#205D6D":""};

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
    const Fourth=styled.div`
    background:${props=>props.bol?"#205D6D":""};

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