import React from 'react';
import axios from 'axios';

const Skills = () => {
  const getUser = async () => {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };

    try {
      const res = await axios.get(
        `https://bio.torre.co/api/bios/nigeriancoder`,
        config,
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={getUser}
        style={{
          width: '100%',
          background: 'blue',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          color: 'white',
        }}>
        Submit
      </button>
    </div>
  );
};

export default Skills;
