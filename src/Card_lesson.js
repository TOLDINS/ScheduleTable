import React, {Component} from 'react';
import './Card.css'

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
            <h5>{(lesson_type!==undefined)?lesson_type:null}</h5>
            <h5>{(teacher1!==undefined)?teacher1:null}{(teacher1_1!==undefined)?teacher1_1:null}{(teacher2!==undefined)?teacher2:null}{(teacher2_1!==undefined)?teacher2_1:null}</h5>
            <h5>{(group1!==undefined)?group1:null}    {(group2!==undefined)?group2:null}    {(group3!==undefined)?group3:null}   {(group4!==undefined)?group4:null}  </h5>
            </div>
            <div className="card_title title-white">
                <p>{subject}</p>
            </div>
            </div>
        )
    }
}

export default Card_lesson

