import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Medical = ({ employeeDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
   
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }


    const reader = new FileReader();

  
    reader.onloadend = () => {
      
      const fileBlob = new Blob([reader.result], { type: selectedFile.type });

     
      const anchor = document.createElement('a');

      
      anchor.href = URL.createObjectURL(fileBlob);

    
      anchor.download = selectedFile.name;

      
      anchor.click();
    };

    
    reader.readAsArrayBuffer(selectedFile);
  };
  
  const downloadAsPDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('medical_expenses.pdf');
      });
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h4" gutterBottom >
        MEDICAL EXPENSES
      </Typography>
      <Grid container justifyContent="center"> 
        <Grid item>
          <TableContainer component={Paper} style={{ width: 'fit-content' , marginright:'200px', marginTop: '10px'}}> 
            <TableContainer id="pdf-content" component={Paper} style={{ width: 'fit-content', marginRight: '200px', marginTop: '10px' }}></TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ backgroundColor: 'green',textAlign:'center' ,color: 'white', padding: '10px', width: '400px' }}>Employee Details</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}>Name:  M.Shanmugapriya</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}>Employee Number:  E001</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}>Position:   Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}  >Phone no:  9876543210</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}>Email:  shanmu@gmail.com</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell style={{  padding: '8px', width: '200px'}}>Aadharno:  12345g67</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1100px' }}>
          <Table>
            <TableRow>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}>MEDICAL EXPENSES</TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '200px' }}>Date of Service</TableCell>
                <TableCell style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '200px' }}>Physician or other Hospital</TableCell>
                <TableCell style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '200px' }}>Amount</TableCell>
                <TableCell style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '200px' }}>Uploadbill</TableCell>
            </TableRow>
            <TableRow>
                <TableCell >28-03-2002</TableCell> 
                <TableCell >GVM</TableCell>   
                <TableCell >5000</TableCell>
                <TableCell ></TableCell>   
                <TableCell >
                  <input type="file" onChange={handleFileSelect} />
                  {selectedFile && <p>Selected File: {selectedFile.name}</p>} 
                  <Button variant='contained' onClick={handleSubmit}>SUBMIT</Button>  
                </TableCell>
            </TableRow>                 
            <TableRow>
                <TableCell >12-09-2004</TableCell> 
                <TableCell >GVM</TableCell>   
                <TableCell >5000</TableCell>
                <TableCell ></TableCell>   
                <TableCell >
                  <input type="file" onChange={handleFileSelect} />
                  {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                  <Button variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >31-08-2019</TableCell> 
                <TableCell >GVM</TableCell>   
                <TableCell >3000</TableCell>
                <TableCell ></TableCell>   
                <TableCell >
                  <input type="file" onChange={handleFileSelect} />
                  {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                  <Button variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell ></TableCell> 
                <TableCell ></TableCell>   
                <TableCell ></TableCell>
                <TableCell ></TableCell>   
                <TableCell ></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} ></TableCell> 
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }} >Total</TableCell>  
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }}> </TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '200px' }}></TableCell>
                <TableCell style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100px' }} ></TableCell> 
            </TableRow>
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
}

export default Medical;
