import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicModal from '../components/modal/BasicModal';
import Header from '../components/header/Header';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  }
  
 
export default function Home() {
    const [formData, setFormData] = useState (initialState);

    const resetFormDataHandler = () => {
        alert("Hallo clear")
        setFormData(initialState)
    }
    const setStateDataHandler = (e) => {
        setFormData({...formData, firstName : e.target.value})
    }
    return (
        <div>
            <Header  headerText="Employees List" />
            <Container fixed style= {{padding:'10px 0px', margin:'50px auto' }}>
                <BasicModal resetFormData={resetFormDataHandler} stateData = {setStateDataHandler} 
                formDateValue = {formData.firstName}  />
            </Container>
        </div>
    )
}
