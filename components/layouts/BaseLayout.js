import React from 'react'
import Header from './../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const {className, children} = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Hugo Meza - Portfolio';
  return(
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Hugo Meza and I am a Computer Engineer graduate from City College of New York and aspiring Software Engineer."/>
        <meta name="keywords" content="hugo portfolio, hugo developer, hugo programming, hugo city college"/>
        <meta property="og:title" content="Hugo Meza - Programmer, Engineer, Developer"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Hugo Meza and I am a Computer Engineer graduated from Grove School of Engineering at City College of New York."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        <link rel="icon" type="image/ico" href="/static/images/favicon.ico"/>
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${headerType}`}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;
