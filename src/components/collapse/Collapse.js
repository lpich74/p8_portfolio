import { useState } from 'react';
import { Collapse, Button, Accordion } from '@mui/material';
import './Collapse.css';

function CustomCollapse(props) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='project-description-box'>
      <Button
        onClick={handleToggle}
        variant="contained"
        color="info">
        <span style={{fontSize: '1.5em'}}>{'A'}</span>
        <span style={{textTransform: 'lowercase', fontSize: '1.5em'}}>{'bout this project'}</span>
      </Button>
      <Collapse in={expanded}>
        <div className='collapse-body'>
          <h3 className='title-sections'>Description :</h3><br />
            <div className='p-sections'>{props.content[0]}</div><br /><br />
          <h3 className='title-sections'>Issues and resolutions :</h3><br />
            <div className='p-sections'>{props.content[1]}</div><br /><br />
          <h3 className='title-sections'>Skills :</h3><br />
            <div className='p-sections'>{props.content[2]}</div>
        </div>
      </Collapse>
    </div>
  );
}

export default CustomCollapse;