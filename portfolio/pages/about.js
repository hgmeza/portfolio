import React, {Component} from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from './../components/BasePage';
import {Row, Col} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein"> Feel free to read a small description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Hugo Meza, and I am a recent Computer Engineer graduate.</p>
                <p>
                  I graduate from Grove School of Engineering at City College of New York, CUNY.
                </p>
                <p>
                  Throughout my undergraduate career, I acquired technical knowledge from two technical interships at startup companies.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
