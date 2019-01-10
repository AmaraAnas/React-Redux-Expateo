import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '../../ui-kit';

const MenuExampleAttached = ({ children }) => (
  <>
    <Menu attached="top">
      <Menu.Item>
        <Link to="/login">login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/private">private</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dumb/0">Dumbo 0</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dumb/1">Dumbo 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dumb/2">Dumbo 2</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dumb/3">Dumbo 3</Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className="ui transparent icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search link icon" />
          </div>
          <div className="results" />
        </div>
      </Menu.Menu>
    </Menu>
    {children}
  </>
);

export default MenuExampleAttached;
