import React from 'react';

import { Icon, Menu } from '../../ui-kit';

const MenuExampleAttached = ({ children }) => (
  <div>
    <Menu attached="top">
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
  </div>
);

export default MenuExampleAttached;
