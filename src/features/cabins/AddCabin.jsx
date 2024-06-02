import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open open="create-cabin">
          <Button variations="primary" size="large">
            Add new Cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="create-cabin">
          <CreateCabinForm typeWindow="modal" />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabin;
