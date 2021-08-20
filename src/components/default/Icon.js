import React from 'react';

import logo from '../../images/svg/logo.svg';
import close from '../../images/svg/ui/close-x.svg';
import hamburger from '../../images/svg/ui/hamburger-toggle.svg';

const iconsMap = {
  /* brand */
  logo: logo,
  /* ui */
  'hamburger-toggle': hamburger,
  'close-x': close,
};

export default function Icon({ name }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5">missing</span>;
  return <IconComponent name={name}></IconComponent>;
}