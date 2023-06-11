import { Modal } from 'react-bootstrap';
import image1 from '../../assets/modal/1.png';
import image2 from '../../assets/modal/2.jpg';
import image3 from '../../assets/modal/3.png';
import image4 from '../../assets/modal/4.jpg';
import image5 from '../../assets/modal/5.jpg';

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="d-grid gap-md-5">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <img src={image1} className="modal-image" />
          </div>
          <div className="col d-flex justify-content-center">
          <img src={image2} className="modal-image" />
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col d-flex justify-content-center">
          <img src={image3} className="modal-image" />
          </div>
          <div className="col d-flex justify-content-center">
          <img src={image4} className="modal-image" />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={image5} className="modal-image" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
