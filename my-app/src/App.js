import React from 'react';
import {Button, Modal, Box, Typography, Container} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 600,
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 1,
  p: 5,
};

export default function (props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Суды пихат заголовок
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            суды пихат опысаные
          </Typography>
        </Box>
      </Modal>
    </Container>
    
  )
}