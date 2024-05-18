import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Matthew McAuley's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to my personal website/portfolio. Please feel free to check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        or view some of my <Link to="/projects">favorite projects</Link>. {' '}
      </p>
    </article>
  </Main>
);

export default Index;
