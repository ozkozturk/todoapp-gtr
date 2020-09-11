import React from 'react';
import 'tabler-icons/iconfont/tabler-icons.min.css';

const Icon = (props:any) => {
  const classList = `ti ti-${props.children}`;
  return (
    <i className={classList} />
  );
};

export default Icon;
