import React, {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipping: false
    }
    this.roles = ['Computer Engineer', 'Software Engineer', 'Tech-Lover', 'Math Geek', 'Built with React and Next.js']
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 6000)
  }
  render() {
    const {isFlipping} = this.state;
    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-2'}`} headerType="index">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Aspiring Software Engineer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Recent Computer Engineering Graduate </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-2.png"/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Hugo Meza.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                  <Typed
                    loop
                    typeSpeed={60}
                    backSpeed={60}
                    strings={this.roles}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    className="self-typed"
                  />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="service-link">Vector illustration credit: 
            <a href="https://www.Vecteezy.com/">vecteezy.com</a>
          </span>
        </div>
      </BaseLayout>
    )
  }
}

export default Index;
