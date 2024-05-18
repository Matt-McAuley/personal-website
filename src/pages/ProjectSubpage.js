import React from 'react';
// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const ProjectSubpage = ({ project }) => (
  <Main
    title={project.title}
    description="Learn about Matthew McAuley's projects."
  >
    <div>{console.log(project)}</div>
    <h1>{`${project.title}`}</h1>
    <h1>{`${project.subtitle}`}</h1>
    <h1>{`${project.link}`}</h1>
    <h1>{`${project.image}`}</h1>
    <h1>{`${project.date}`}</h1>
    <h1>{`${project.desc}`}</h1>
  </Main>
);

ProjectSubpage.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectSubpage;
