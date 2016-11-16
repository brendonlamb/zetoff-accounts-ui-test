import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Accounts
import '/imports/api/accounts.js';

// App Container
import App from '/imports/ui/components/App.jsx';

// Page Components
import Home from '/imports/ui/pages/Home.jsx';


FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      content: <Home />
    });
  }
});