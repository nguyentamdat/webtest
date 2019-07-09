import React from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import PatientForm from "../containers/PatientForm";

export default function EditButton(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <PatientForm />
      </Modal>
    </div>
  );
}
