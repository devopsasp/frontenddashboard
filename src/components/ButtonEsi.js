
import React from 'react'
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Esicslip from './EsiSlip';

function ButtonEsi() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < Esicslip/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'Esicslip.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default ButtonEsi