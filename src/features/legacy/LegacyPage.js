import React from 'react';
import PropTypes from 'prop-types';

export default function LegacyPage({ url }) {
  const ref = React.useRef();
  const [height, setHeight] = React.useState('0px');
  const onLoad = () => {
    // setHeight(`${ref.current.contentWindow.document.getElementById('NCCIMasterPage_Container').scrollHeight}px`);
    setHeight('0px');
    //console.log('onload');
  };
  return (
    <div>{url}</div>
    // <iframe
    //   title="fdcpage"
    //   key="0"
    //   ref={ref}
    //   onLoad={onLoad}
    //   id="myFrame"
    //   src={url}
    //   width="100%"
    //   height={height}
    //   scrolling="no"
    //   frameBorder="0"
    //   style={{
    //     width: '100%',
    //     overflow: 'auto',
    //     border: 'none',
    //   }}
    // />
  );
}
LegacyPage.propTypes = {
  url: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
};
