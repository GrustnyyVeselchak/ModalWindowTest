import React from 'react';
import {Button, Modal, Box, TextField, DialogActions, DropzoneAreaBase} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  p: 4,
};

export default function (props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Добавить новость</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField
              color="secondary"
              id="modal-modal-title" 
              label="Заголовок новости" 
              fullWidth
              variant="outlined" 
            />
            <TextField
              sx={{ mt: 2 , mb: 2 }}
              id="modal-modal-description"
              label="Текст новости"
              fullWidth
              multiline
              rows={10}
            />
            <DialogActions>
              <Button onClick={handleClose}>Отменить</Button>
              <Button onClick={handleClose}>Добавить</Button>
            </DialogActions>
        </Box>
      </Modal>
    </div>
  )
}






































  /*
  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      
          <Dialog 
              open={open} 
              onClose={handleClose}
          >
            <DialogTitle>Добавление новости</DialogTitle>
            <DialogContent sx={{width: "400px", height: "600px"}}>
            <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '90%' },}}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField id="outlined-basic" label="Заголовок новости" variant="outlined" />
                <TextField
                  id="outlined-multiline-static"
                  label="Текст новости"
                  multiline
                  rows={10}
                  
                />
              </div>
            </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отменить</Button>
              <Button onClick={handleClose}>Добавить</Button>
            </DialogActions>
          </Dialog>
    </Container>
    
  )
}
*/