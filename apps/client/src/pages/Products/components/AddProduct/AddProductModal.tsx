import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductContent({ closeModal }: ModalProps) {
  return (
    <>
      <h1 className="">This is the ADD product Modal</h1>
      <button onClick={closeModal} className="">
        CLOSE MODAL
      </button>
    </>
  );
}

function AddProductModal({ closeModal, isOpen }: ModalProps) {
  return (
    <Backdrop
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={closeModal}
    >
      <Modal
        handleClose={closeModal}
        className="h-[30rem] w-[50rem] bg-white p-8 mx-8 rounded-lg flex flex-col items-center"
      >
        <AddProductContent closeModal={closeModal} />
      </Modal>
    </Backdrop>
  );
}

export default AddProductModal;
