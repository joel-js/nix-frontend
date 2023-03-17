import React from 'react';

const WindowResizeHook = () => {
  const [size, setSize] = React.useState({ innerWidth: 0, innerHeight: 0 });
  React.useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default WindowResizeHook;
