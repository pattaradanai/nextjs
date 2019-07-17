import React, { Component } from 'react'
import Head from 'next/head'

// import {Link,Router} from '../../../routes'
// components
import App from '../component/App'
import Sliders from '../component/App/slide'
import Card from '../component/App/content/card'



class Index extends Component {
    render() {
        return (
            <App>
                <Head>
                    <title>My About</title>
                </Head>
                <body className="bg">
                    <div>
                        <div className="container ">
                            {/* <div className="row">
                                    <div className="col-12">
                                        <Sliders/>
                                    </div>
                                </div> */}
                            <div className="row category">
                                <h3>
                                    Category
                                    </h3>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <Card />
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <Card />
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <Card />
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                </body>


            </App>
        );
    }

}

export default Index