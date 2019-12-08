import React, {Component, Fragment} from 'react';
import Link from 'next/link'
import './../../styles/main.scss';

class Header extends Component {
  render() {
    return(
      <Fragment>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
        <Link href="/cv">
          <a>CV </a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio </a>
        </Link>
        <Link href="/blogs">
          <a>Blogs </a>
        </Link>
      </Fragment>
    )
  }
}

export default Header;
