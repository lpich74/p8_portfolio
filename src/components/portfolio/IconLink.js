import React, { useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

function IconLink(props) {
   const { link, title, icon } = props;
   
   const [dialogOpen, setDialogOpen] = useState(false);

   const handleDialogOpen = () => {
      setDialogOpen(true);
   };

   const handleDialogClose = () => {
      setDialogOpen(false);
   };

   if (!link) {
      return (
         <>
            <span onClick={handleDialogOpen}>
               <i className={icon} /> {title}
            </span>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
               <DialogTitle>Link Empty</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     Sorry, this project does not have any live demo.
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleDialogClose} color="error">
                     Close
                  </Button>
               </DialogActions>
            </Dialog>
         </>
      );
   }

   return (
      <a href={link} target="_blank" rel="noopener noreferrer">
         <i className={icon} /> {title}
      </a>
   );
}

export default IconLink;