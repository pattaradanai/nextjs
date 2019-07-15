import React, { Component } from 'react'

class Card extends Component{
    render(){
        return(
            <div id="card">
                   <div className="card">
                        <div className="card-image">
                                <img src='/static/images/img_test.jpg'/> 
                        </div>
                        <div className="text">
                            Test
                        </div>
                        
                   </div>
            </div>
        );
    }
}

export default Card