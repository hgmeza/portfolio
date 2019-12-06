import React, {Component, Fragment} from 'react';
import Link from 'next/link'

class Header extends Component {
  render() {
    return(
      <Fragment>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </Fragment>
    )
  }
}

export default Header;
