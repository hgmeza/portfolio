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
                <p>My name is Hugo Meza, and I am a recent Computer Engineering graduate from the Grove School
                  of Engineering at City College of New York, CUNY.
                </p>
                <p>
                  I originally started at Brooklyn College, where I was part of the Swimming and Diving Team, and,
                   while being a full-time student, working part-time, I was named Swimmer of the week twice, and 
                   also broke swimming school records. More info <a target="_blank" href="https://www.brooklyncollegeathletics.com/news/2016/12/13/mens-swimming-diving-sophomore-hugo-meza-named-cunyac-swimmer-of-the-week.aspx">here.</a>
                </p>
                <p>
                  Being transferred to CCNY to pursue my engineering degree, I participated 
                  at a Software Development Bootcamp called <a target="_blank" href="https://cunytechprep.nyc/">CUNY Tech Prep </a>
                   (if you scrol down, currently, I am in the last picture of the curriculum section!). Here, in a team of 4, we developed the 
                  <a target="_blank" href="http://climateaware.herokuapp.com/"> Climate Aware Web App.</a>
                </p>
                <p>
                  I then became President of the Association for Computing Machinery - CCNY Chapter. Here, along the board, 
                  we developed fun activies. Check out this one <a target="_blank" href="https://www.linkedin.com/posts/hgmeza_cuny-oncampus-citycollege-activity-6461297096560562176-Jd6E/">here!</a>
                </p>
                <p>
                  And to add to that, I also interned twice at startup companies! Take a look at the CV section to know more about it!
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
