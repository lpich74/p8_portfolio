import React from 'react';
import IconLink from "./IconLink";
import CustomCollapse from '../collapse/Collapse';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, short, issues, developedSkills} = props;

   const skillsList = developedSkills.map((skill, index) => (
      <li style={{backgroundColor:'#cbd2d0'}} key={index}>{skill}</li>
   ));

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box style={{padding: 30, paddingTop: 50}} component={'img'} src={image} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
         <CustomCollapse 
            content={[short, issues, <ul>{skillsList}</ul>]}
         />
      </Box>
   );
}

export default PortfolioBlock;