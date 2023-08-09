import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock
                        image={project.image}
                        live={project.live}
                        source={project.source}
                        title={project.title}
                        short={project.description[0].short}
                        issues={project.description[0].issues}
                        developedSkills={project.description[0].developedSkills}
                    />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};