import React, { useState } from 'react';
import './App.css';
import LightBulb from './components/LightBulb';
import styled from 'styled-components';
import { useSprings } from 'react-spring'
import { useInterval } from './hooks';

const BulbsContainer = styled.div`
  display: flex;
`;

const OuterContainer = styled.div`
  text-align: center;

  input {
    margin-top: 45px;
  }
`


const App = () => {
  
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interval, setInterval] = useState(600);

  useInterval(() => {
    // Your custom logic here
    if (!paused) {
      setCurrent(current + 1);
      if (current > 5) setCurrent(0);
      console.log('current', current);
    }
  }, interval);

  const Bulbs = [
    {
      index: 0,
      color: 'rgb(255, 0, 0)'
    },
    {
      index: 1,
      color: 'rgb(255, 165, 0)'
    },    
    {
      index: 2,
      color: 'rgb(255, 255, 0)'
    },    
    {
      index: 3,
      color: 'rgb(0, 128, 0)'
    },    
    {
      index: 4,
      color: 'rgb(0, 0, 255)'
    },    
    {
      index: 5,
      color: 'rgb(0, 0, 139)'
    },    
    {
      index: 6,
      color: 'rgb(128, 0, 128)'
    },    
  ];

  const springs = useSprings(Bulbs.length, Bulbs.map(item => ({
    from: { backgroundColor: '#666', boxShadow: '0 0 0px 0px rgba(0,0,0,0)' },
    to: { backgroundColor: current === item.index ? item.color : "#666", boxShadow: current === item.index ? `0 0 20px 5px ${item.color}` : '0 0 0px 0px rgba(0,0,0,0)' },
  })));

  return (
    <OuterContainer>
      <BulbsContainer>
        {springs.map((animation, key) => (
          <LightBulb key={key} style={animation} />
        ))}
      </BulbsContainer>
      <input type="number" onChange={(event) => setInterval(event.target.value)} defaultValue={interval} />
      <button onClick={() => setPaused(!paused)}>
          Pause
      </button>
    </OuterContainer>
  )
}

export default App;
