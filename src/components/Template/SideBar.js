import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Matthew McAuley</h2>
        <p><a href="mailto:mwm223@cornell.edu">mwm223@cornell.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Matt. I&apos;m a student at Cornell University studying
        <a href="https://www.cs.cornell.edu/" target="_blank" rel="noreferrer"> Computer Science </a>
        in the College of Engineering. I&apos;m interested in all things CS including
        Data Science, Software Engineering, AI, and Game Design.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
