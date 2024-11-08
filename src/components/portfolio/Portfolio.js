import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";


export default function Portfolio({innerRef}) {
    return (
        <div>
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'} style={{marginTop: '100px'}}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
        <h1 style={{ marginBottom:'50px',marginLeft: '825px', fontFamily: 'Merriweather, Montserrat Alternates, Rubik Wet Paint, Sacramento, sans-serif' }}>
  and many more <br /> to come...
</h1>

        </div>
    );
};