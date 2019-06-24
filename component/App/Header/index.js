import React, { Component } from 'react'
import Head from "next/head"
import "../../../styles/style.scss"

class Header extends Component{
    render(){
        return(
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="author" content="Pattaradanai Sangton" />
                {/* <meta name="google-site-verification" content="QU2zbjibdTGONZ7JQusMsnnKPQ1aIT7GeyLcpZqieww" />
                <meta name="google-signin-client_id" content="222603488145-k2uv58ss5v07370k1r7sp58fh0im5qcu.apps.googleusercontent.com" /> */}
                {/* <meta name="keywords" content="บทเรียน, ข้อสอบ, คณิตศาสตร์, วิทยาศาสตร์, ภาษาไทย, ภาษาอังกฤษ, สังคมศึกษา, แผนการสอน, แผนการจัดการเรียนรู้, สื่อการสอน, โครงงาน, ผลงานวิชาการ, งานวิจัย, ข่าวการศึกษา, เทคโนโลยี, ไอที, นวัตกรรม, TCAS, รับตรง, โควตา, แอดมิชชัน, Admissions, O-Net, GAT/PAT, 9 วิชาสามัญ, กสพท" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
                <link rel="stylesheet" type="text/css" href="/static/assets/bootstrap-4.1.3/css/bootstrap.min.css" media="screen,print" />
                {/* <script src="/static/assets/bootstrap-4.1.3/js/bootstrap.min.js"></script> */}

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
            </Head>
        );
    }
}
export default (Header)