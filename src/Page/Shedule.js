import React,{Component} from 'react';

import {getAllRooms,getLessons} from '../API/fetchRequest';
class Shedule extends Component{
    state={
        allrooms:[],
        lessons:[]
         };
    componentDidMount(){
   
        getAllRooms(22).then(res=>this.setState({allrooms:res}));
        getLessons(22).then(res=>this.setState({lessons:res}));
       
     }    
   
      
       render(){
        //    let result=this.state.allrooms.map(item=>{
        //        return(
        //               <div>
        //               <p>{item}</p>
        //               </div>) 
        //    }) 
           
        let classrooms=this.state.allrooms.map((item)=>{
           
            return <div style={{
                float:'left',
                margin:10
            }}><p>{item}</p></div>

        })
           return(

            <div style={{
                
                display:'inline-block'
            }}>
                {classrooms}


            </div>
         
            )
          
               
           
   
       
   
       }

}
 


export default Shedule