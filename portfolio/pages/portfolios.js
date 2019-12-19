import React, {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from './../components/BasePage'
import {Col, Row, Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap'

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [
      {
        position: 'Software Developer Intern',
        location: 'New York',
        company: 'Nuravine',
        description: 'Worked in a startup company that focuses on indoor farming. My role was to transition their server to a serverless architecture using AWS',
      },
      {
        position: 'Software Engineering Intern',
        location: 'New York',
        company: 'HelloYada, Inc.',
        description: 'Startup that initially focused on data standarization. Then moved to mobile apps. My role was to develop their server and database from scratch while working on a React frontend'
      },
      {
        position: 'Mini Instagram iOS Replica',
        location: 'New York',
        company: 'Personal Project',
        description: 'Developed a Parse backend that connected to iOS to replicate Instagram. Supported features are adding, liking, and commenting an image.',
      },
    ]
    return {posts};
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return(
        <Col md="4">
          <React.Fragment key={index}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{post.position}</CardHeader>
                <CardBody>
                  <p className="portfolio-card-city">{post.location}</p>
                  <CardTitle className="portfolio-card-title">{post.company}</CardTitle>
                  <CardText className="portfolio-card-text">{post.description}</CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
      )
    })
  }
  render() {
    const {posts} = this.props;
    return (
      <BaseLayout>
        <BasePage className="portfolio-page" title="Portfolios">
          <Row>
            {this.renderPosts(posts)}
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;
