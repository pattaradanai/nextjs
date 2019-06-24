import React, { Component } from 'react'
import Head from 'next/head'

// import {Link,Router} from '../../../routes'
// components
import App from '../component/App'
import Sliders from '../component/App/slide'



class Index extends Component {
        render(){
            return(
                <App>
                    <Head>
                    <title>Mono Vampire</title>
                    <meta name="description" content="Mono Vampire" />
                    
                    {/* // facebook shared */}
                    <meta property="og:title" content="Mono Vampire" />
                    <meta property="og:description" content="Mono Vampire" />
                    {/* <meta property="og:image" content={`${ process.env.SITE_SHARED }/static/assets/images/image-shared.jpg`} /> */}
                    {/* // twitter shared */}
                    <meta name="twitter:title" content="Mono Vampire" />
                    <meta name="twitter:description" content="Mono Vampire" />
                    {/* <meta name="twitter:image" content={`${ process.env.SITE_SHARED }/static/assets/images/image-shared.jpg`} /> */}
                    </Head>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <Sliders/>
                            </div>
                        </div>
                    </div>
                    
                </App>
        );
    }

} 
  
export default Index