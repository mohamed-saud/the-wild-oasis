/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Row from "../../ui/Row";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import {
  HiDocumentDuplicate,
  HiMiniPencil,
  HiMiniTrash,
} from "react-icons/hi2";
import { useDublecateCabin } from "./useDublecateCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import { HiDotsVertical } from "react-icons/hi";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const queryClient = useQueryClient();
  const [showEdite, setShowEdite] = useState(false);
  const { id, name, discount, image, regularPrice, maxCapacity } = cabin;
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin successfully deleted");
    },
    onError: (error) => toast.error(error),
  });
  const { isDublecating, dublecatingCabin } = useDublecateCabin();

  function onCloseModal() {
    setShowEdite((showEdite) => !showEdite);
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fit up to {maxCapacity} Geusts</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <Menus type="center">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle menuId={cabin.id}>
                <HiDotsVertical />
              </Menus.Toggle>
              <Menus.List listId={cabin.id}>
                <Menus.Button
                  onClick={() => dublecatingCabin(cabin)}
                  icon={<HiDocumentDuplicate />}
                >
                  dublecate
                </Menus.Button>
                <Modal.Open open="edite-cabin">
                  <Menus.Button icon={<HiMiniPencil />}>edite</Menus.Button>
                </Modal.Open>

                <Modal.Open open="delete-cabin">
                  <Menus.Button icon={<HiMiniTrash />}>delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete-cabin">
                <ConfirmDelete onConfirm={() => mutate(id)} />
              </Modal.Window>
              <Modal.Window name="edite-cabin">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </Menus>
      </TableRow>
    </>
  );
}

export default CabinRow;
