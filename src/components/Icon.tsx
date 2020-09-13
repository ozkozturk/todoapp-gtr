import React, { FC } from 'react';
import 'tabler-icons/iconfont/tabler-icons.min.css';

const Icon: FC = ({ children }) => {
  const classList = `ti ti-${children}`;
  return (
    <i className={classList} />
  );
};

export default Icon;
