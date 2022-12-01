import React from 'react';
import { CircularProgress } from '@mui/material';
import './style.css';

const CircularProgressCustom = ({ val }) => {
  return (
    <>
      <CircularProgress
        variant="determinate"
        value={100}
        size="20rem"
        thickness={2.5}
        sx={{
          color: '#faf8f7',
          filter: 'drop-shadow(-10px 10px 10px #ccc)',
        }}
      />
      <div className="back-prog">
        <CircularProgress
          variant="determinate"
          value={val}
          size="20rem"
          thickness={2.5}
          sx={{
            color: '#4589b9',
          }}
        />
      </div>
    </>
  );
};

export default CircularProgressCustom;
