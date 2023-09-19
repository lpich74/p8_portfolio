import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Style from './Collapse.module.scss';

function CustomCollapse(props) {
  const { title, content, subtitles } = props

  return (
    <div className={Style['project-description-box']}>
      <Accordion
        className={Style.collapse}
        style={{ backgroundColor: '#27242f', fontFamily: 'Roboto, Helvetica, sans-serif', margin: '20px 40px 40px 40px', borderRadius: '10px' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white', fontSize: '30px' }} />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography style={{ fontSize: '2.1em', color: 'white' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#27242f', borderRadius: '4px', padding: '25px 20px 10px 20px' }}>
          {content.map((section, index) => (
            <div style={{ backgroundColor: '#27242f'}} key={index}>
              <h3 style={{ fontSize: '1.9em', color: 'rgb(254,199,0)', marginBottom: 12 }} className="title-sections">
                {subtitles[index]}
              </h3>
              <div className={Style.section} style={{ backgroundColor: '#27242f', fontSize: '1.7em' }}>{section}</div>
              <br /><br />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomCollapse;