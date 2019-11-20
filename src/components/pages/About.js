import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>User interface to search Github users</p>
      <p>Version: 1.0.2</p>
      <p>Github <a href="https://github.com/GinaKui/search-github-users" target="_blank" rel="noopener noreferrer">Source Code</a></p>
      <p>The backend api document can be found <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">here</a></p>
    </Fragment>
  );
};

export default About;
