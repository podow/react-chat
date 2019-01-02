import React from 'react';

import MUIAvatar from '@material-ui/core/Avatar';

import getColor from '../utils/color-from';
import titleInitial from '../utils/title-initial';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar
    style={{
      backgroundColor: getColor(colorFrom)
    }}
    {...rest}
  >
    {titleInitial(children)}
  </MUIAvatar>
);

export default Avatar;
