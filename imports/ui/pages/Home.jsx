import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Accounts } from 'meteor/std:accounts-ui';

// Page Component
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <Accounts.ui.LoginForm />
    );
  }
}

// Page Container
export default createContainer(({ params }) => {
  return {
  };
}, Home);