import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>User interface to search Github users</p>
      <p>Version: 1.0.1</p>
      <p>Source Code at: <a to='https://github.com/GinaKui/search-github-users'>github</a></p>
      <p>The backend api document: <a>https://developer.github.com/v3/</a></p>
    </Fragment>
  );
};

export default About;
