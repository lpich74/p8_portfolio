import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Style from './Collapse.module.scss';

function CustomCollapse(props) {
  return (
    <div className={Style['project-description-box']}>
      <Accordion className={Style.collapse} style={{ fontFamily: 'Roboto, Helvetica, sans-serif', margin: '20px 40px 40px 40px', borderRadius: '5px' }}>
        <AccordionSummary
          style={{ borderRadius: '5px' }}
          expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '30px' }} />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography style={{ fontSize: '2em', color: 'white' }}>About this project</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#cbd2d0', borderRadius: '5px', padding: '25px 20px 10px 20px' }}>
          {props.content.map((section, index) => (
            <div style={{ backgroundColor: '#cbd2d0'}} key={index}>
              <h3 style={{ fontSize: '1.8em', color: 'rgb(0, 66, 1705)', marginBottom: 12 }} className="title-sections">
                {index === 0 ? 'Description :' : index === 1 ? 'Issues and resolutions :' : 'Skills :'}
              </h3>
              <div style={{ backgroundColor: '#cbd2d0', fontSize: '1.6em' }}>{section}</div>
              <br /><br />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomCollapse;