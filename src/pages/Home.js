import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicModal from '../components/modal/BasicModal';
import Header from '../components/header/Header';
import { v4 as uuidv4 } from 'uuid';
import StickyHeadTable from '../components/table/StickyHeadTable'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
}


export default function Home() {
    const [formData, setFormData] = useState(initialState);
    const [EmployeeData, setEmployeeData] = useState([])

    const resetFormDataHandler = () => {
        setFormData(initialState)
    }
    const setStateDataFirsName = (e) => {
        setFormData({ ...formData, firstName: e.target.value })
    }
    const setStateDataLastName = (e) => {
        setFormData({ ...formData, lastName: e.target.value })
    }
    const setStateDataEmail = (e) => {
        setFormData({ ...formData, email: e.target.value })
    }
    const setStateDataPhoneNo = (e) => {
        setFormData({ ...formData, phoneNo: e.target.value })
    }
    const onSubmitHandler = () => {
        if (!formData.firstName || !formData.lastName || !formData.email) {
            alert("Please input all required data first")
            return;
        }
        let employee = {
            uuid: uuidv4(),
            First_Name: formData.firstName,
            Last_Name: formData.lastName,
            Email: formData.email,
            Phone_No: formData.phoneNo,
        }
        setEmployeeData([...EmployeeData, employee])
        setFormData(initialState)
    }

    return (
        <Box>
            <Header headerText="Employees List" />
            <Container fixed style={{ padding: '10px 0px', margin: '50px auto' }}>
                <BasicModal resetFormData={resetFormDataHandler} setStateFirstName={setStateDataFirsName} setStateLastName={setStateDataLastName}
                    setStateEmail={setStateDataEmail} setStatePhoneNo={setStateDataPhoneNo} submitHandler={onSubmitHandler}
                    formDataValue={formData} />
                <Box sx= {{my:3}}>
                    <StickyHeadTable tableData= {EmployeeData}/>
                </Box>
            </Container>

        </Box>
    )
}
