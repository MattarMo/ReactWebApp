import React from 'react';
import Aux from '../../hoc/Aux';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props}</main>
  </Aux>
);

export default layout;