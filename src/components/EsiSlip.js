import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

const Esicslip = ({ employeeDetails }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h4" gutterBottom >
        ESIC
      </Typography>
      <Grid container justifyContent="center"/> 
      <Grid item>
        <TableContainer component={Paper} style={{ width: 'fit-content' , marginLeft:'400px', marginTop: '10px'}}> 
        
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '300px' }}>Employee Details</TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '300px' }}></TableCell>
              </TableRow>

              <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>Employee Name:</TableCell>
              <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>shanmu</TableCell>
            
            
              <TableRow>  
              
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>UHID Number:DTU678</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DTU678</TableCell>
            
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Dispensary Name:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DDDDdd</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}  >Registration Date :</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>28-03-2002</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Current date of Appointment:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>09-05-2014</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Pehchan Done:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Printing Done:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Number of Duplicate Cards Done:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DTU678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Latest Duplicate card Request Location:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>DTU678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>dispensary Name For family:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Insurance Number:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>23445465</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Date Of Birth:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>23-06-2019</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Disability Type:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Phone no:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>1234567890</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Pehchan Processed Date:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Printing Date:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{  padding: '9px', width: '100px'}}>Last Duplicate Card Date:</TableCell>
                <TableCell style={{textAlign:'left',  padding: '9px', width: '100px'}}>NA</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <br></br>
   <Grid item xs={12}>
       <Typography variant="h7" align="left" style={{ marginTop: '10px' }}>
         Signature of Employee : shanmu
       </Typography>
  
      </Grid>      
      </div>
  );
};
export default Esicslip;