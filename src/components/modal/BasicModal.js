import * as React  from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Header from '../header/Header'
import BasicTextFields from '../inputItem/BasicTextFields';
import { EmployeeInputText } from '../../constant/EmployeeInputText';
import ButtonBasic from "../button/ButtonBasic"

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export default function BasicModal({resetFormData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
  



  
  
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phoneNo, setPhoneNo] = useState('')

  // const clearFormHandler = () => {
  //   setFirstName('')    
  //   setLastName('')    
  //   setEmail('')    
  //   setPhoneNo('')    

  // }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984' }}>Add Employee</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Header headerText="Employees Information" />
          </Box>

          <Box sx={{ px: 20, py: 2 }}>
            {EmployeeInputText.map((item) => {
              return (
                <BasicTextFields inputLabel={item.lable} placeholder={item.placeholder} inputChange ={item.onChange} inputValue= {item.value} />
              )
            })}
            <Box sx={{ m: 2, textAlign: 'center' }}>
              <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px' }}>Submit</Button>
              <Button onClick={resetFormData} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px' }}>Clear</Button>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'end' }}>
            <Button onClick={handleClose} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '5px' }}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}