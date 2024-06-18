import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ResignationForm = () => {
    const [employeeid, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [post, setPost] = useState('');
    const [fillingDate, setFillingDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [seniority, setSeniority] = useState('');
    const [entryDate, setEntryDate] = useState('');
    const [intendedRegistrationDate, setIntendedRegistrationDate] = useState('');
    const [jobResponsibilities, setJobResponsibilities] = useState('');
    const [resignationReason, setResignationReason] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Employee Id:', employeeid);
        console.log('Employee Name:', employeeName);
        console.log('Gender:', gender);
        console.log('Department:', department);
        console.log('Post:', post);
        console.log('Filling Date:', fillingDate);
        console.log('Job Title:', jobTitle);
        console.log('Seniority:', seniority);
        console.log('Entry Date:', entryDate);
        console.log('Intended Registration Date:', intendedRegistrationDate);
        console.log('Job Responsibilities:', jobResponsibilities);
        console.log('Resignation Reason:', resignationReason);
    };

    return (
        <Grid container justifyContent="center" style={{ marginTop: 50 }}>
            <Grid item xs={8}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Employee Resignation Application Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel>Employee Id</InputLabel>
                                    <Select
                                        value={gender}
                                        onChange={(e) => setEmployeeId(e.target.value)}
                                        label="EmployeeId"
                                    >
                                        <MenuItem ></MenuItem>
                                        <MenuItem></MenuItem>
                                        <MenuItem ></MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Employee Name"
                                    variant="outlined"
                                    fullWidth
                                    value={employeeName}
                                    onChange={(e) => setEmployeeName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        label="Gender"
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Department"
                                    variant="outlined"
                                    fullWidth
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Post"
                                    variant="outlined"
                                    fullWidth
                                    value={post}
                                    onChange={(e) => setPost(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Filling Date"
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    value={fillingDate}
                                    onChange={(e) => setFillingDate(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Job Title"
                                    variant="outlined"
                                    fullWidth
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Seniority"
                                    variant="outlined"
                                    fullWidth
                                    value={seniority}
                                    onChange={(e) => setSeniority(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Entry Date"
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    value={entryDate}
                                    onChange={(e) => setEntryDate(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Intended Registration Date"
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    value={intendedRegistrationDate}
                                    onChange={(e) => setIntendedRegistrationDate(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Job Responsibilities"
                                    variant="outlined"
                                    fullWidth
                                    value={seniority}
                                    onChange={(e) => setJobResponsibilities(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Resignation Reason"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={resignationReason}
                                    onChange={(e) => setResignationReason(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
       <Typography variant="h7" align="center" style={{ marginTop: '10px' }}>
         Signature of Employee : shanmu
       </Typography>
       
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                            
  </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ResignationForm;