import React from 'react'
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';

import ResignationForm from './Resignationslip';

export default function Buttonres() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < ResignationForm/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'Resginationslip.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

