import React, { Component } from 'react'


import Header from './Header'
// import Footer from './Footer'


class App extends Component{
        render(){
            return(
                <>
                    <Header/>
                    <div className="container-fluid">{ this.props.children }</div> 
                </>
            );
        } 
}
export default App