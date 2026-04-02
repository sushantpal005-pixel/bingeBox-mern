// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useDispatch, useSelector } from 'react-redux';
// import { setOpen } from '../redux/movieSlice';
// import VideoBackground from './VideoBackground';

// export default function MovieDialog() {
//   const {open, id} = useSelector(store=>store.movie)
//   const dispatch = useDispatch()
//   const handleClose = ()=>{
//     dispatch(setOpen(false))
//   }

//   return (
//     <React.Fragment>
//       <Dialog
//         open={open}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
        
//         <DialogContent component = "div">
//           <DialogContentText id="alert-dialog-description">
//             <VideoBackground movieId={id} bool={true}/>
//           </DialogContentText> 
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";
import DialogContentText from "@mui/material/DialogContentText";

export default function MovieDialog() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogContent className="p-0">
        <DialogContentText id="alert-dialog-description">

        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <VideoBackground movieId={id} bool={true} />
        </div>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}