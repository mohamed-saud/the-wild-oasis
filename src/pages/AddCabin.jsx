import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

function AddCabin() {
  const [showForm, setShoForm] = useState(false);

  return (
    <div>
      <Button
        variations="primary"
        size="large"
        onClick={() => setShoForm((showForm) => !showForm)}
      >
        Add new Cabin
      </Button>
      {showForm && (
        <Modal onClose={() => setShoForm(false)}>
          <CreateCabinForm
            onCloseModal={() => setShoForm(false)}
            typeWindow="model"
          />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
