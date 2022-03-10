import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicModal from '../components/modal/BasicModal';
import Header from '../components/header/Header';
import { v4 as uuidv4 } from 'uuid';
import CustomizedTables from '../components/table/CustomizedTables'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
}


export default function Home() {
    const [formData, setFormData] = useState(initialState);
    const [EmployeeData, setEmployeeData] = useState([])
    const [open, setOpen] = useState(false);
    const [updateBtnFlage, setupdateBtnFlage] = useState(false)
    const [viewBtnFlage, setViewBtnFlage] = useState(true)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setFormData(initialState)
        setViewBtnFlage(true)
      
};

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
    const emailVerification = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!formData.firstName || !formData.lastName || !formData.email) {
        alert("Please input all required data first")
        return;
    }
    if (!emailVerification.test(formData.email)) {
        alert("Please enter a valid email")
        return;
    } else {
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
}
const deleteHandler = (uuid) => {
    let newEmployeeData = EmployeeData.filter((item) => item.uuid !== uuid)
    setEmployeeData(newEmployeeData)
    alert("Clicked data will be deleted")
}
const updateHandler = (row) => {
    let empdata = {
        firstName: row.First_Name,
        lastName: row.Last_Name,
        email: row.Email,
        phoneNo: row.Phone_No
    }
    setFormData({ ...formData, ...empdata });
    setOpen(true)
    setupdateBtnFlage(true)
   
}
const viewHandler = (row) => {
    let empdata = {
        firstName: row.First_Name,
        lastName: row.Last_Name,
        email: row.Email,
        phoneNo: row.Phone_No
    }
    setFormData({ ...formData, ...empdata });
    setOpen(true)
    setViewBtnFlage(false)
}


return (
    <Box>
        <Header headerText="Employees List" />
        <Container fixed style={{ padding: '10px 0px', margin: '50px auto' }}>
            <BasicModal resetFormData={resetFormDataHandler} setStateFirstName={setStateDataFirsName} setStateLastName={setStateDataLastName}
                setStateEmail={setStateDataEmail} setStatePhoneNo={setStateDataPhoneNo} submitHandler={onSubmitHandler}
                formDataValue={formData} modelState={open} modelopen={handleOpen} modelclose={handleClose} 
                updateBtnFlageProp={updateBtnFlage} viewBtnFlageProp={viewBtnFlage}  />
            <Box sx={{ my: 3 }}>
                <CustomizedTables tableData={EmployeeData} deleteHandlerProp={deleteHandler} updateHandlerProp={updateHandler} viewHandlerprop={viewHandler} />
            </Box>
        </Container>

    </Box>
)
}
