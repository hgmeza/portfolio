import React, {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from './../components/BasePage'
import {
  Col, 
  Row, 
  Card, 
  CardHeader, 
  CardBody, 
  CardText, 
  CardTitle, 
  Button, 
  CardLink
} from 'reactstrap'

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [
      {
        position: 'Software Developer Intern',
        location: 'New York',
        company: 'Nuravine',
        description: 'Worked in a startup company that focuses on indoor farming. My role was to transition their server to a serverless architecture using AWS',
        link: '',
      },
      {
        position: 'Software Engineering Intern',
        location: 'New York',
        company: 'HelloYada, Inc.',
        description: 'Startup that initially focused on data standarization. Then moved to mobile apps. My role was to develop their server and database from scratch while working on a React frontend',
        link: '',
      },
      {
        position: 'Mini Instagram iOS Replica',
        location: 'New York',
        company: 'iOS Project',
        description: 'This is an Instagram clone with a custom Parse backend that allows a user to post photos, view a global photos feed, and add comments!',
        link: 'https://github.com/hgmeza/Parstagram-iOS',
      },
      {
        position: 'Twitter iOS Replica',
        location: 'New York',
        company: 'iOS Project',
        description: 'Developed an iOS Twitter client. This is a basic twitter app to view, compose, favorite, and retweet tweets.',
        link: 'https://github.com/hgmeza/twitter_rep_ios',
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
                  {post.link ? (
                    <Button color="danger">
                      <CardLink target="_blank" href={post.link} style={{color: "white"}}>Repo</CardLink>
                    </Button>
                  ) : (
                    <div></div>
                  )
                  }
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
        <BasePage className="portfolio-page" title="Portfolio">
          <Row>
            {this.renderPosts(posts)}
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;
