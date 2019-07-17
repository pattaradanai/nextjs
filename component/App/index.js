import React, { Component } from 'react'
import Header from './Header'
import "../../styles/style.scss"


class App extends Component{
        render(){
            return(
                <div className="bg"> 
                    <Header/>
                    <div className="row">
                        <div className="container">{ this.props.children }</div> 
                    </div>
                </div>
            );
        } 
}
export default App