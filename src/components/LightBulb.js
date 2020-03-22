import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const Container = styled(animated.div).attrs(props => ({
  style: props.style
}))`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 10px;
  ...${props => props.style}
`

const LightBuld = ({ style }) => {

  return (  
    <Container style={style}/>
  );
}
 
export default LightBuld;