import React from 'react'
import Modal from 'react-modal';

// Styles
import style from '../Modal.module.css'

// React Icons
import { IoClose } from "react-icons/io5";

// Images
import User from '../../../assets/images/user.svg'
import LogoVertical from '../../../assets/images/logos/LogoVertical.svg'

const customStyles = {
     content: {
          maxHeight: '600px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
     },
};

export default function Turn() {

     const [modalIsOpen, setIsOpen] = React.useState(false);

     function openModal() {
          setIsOpen(true);
     }

     function closeModal() {
          setIsOpen(false);
     }

     return (
          <>
               <button onClick={openModal} className='btn__bordo'>FINALIZAR</button>
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
               >
                    <div className={style.modal__head}>
                         <IoClose onClick={closeModal} className={style.modal__close} />
                    </div>
                    <div className={style.modal__body}>
                         <div className={style.modal__turn}>
                              <div>
                                   <h2>Tu turno será solicitado con los siguientes datos:</h2>
                              </div>
                              <p>Nombre y Apellido del solicitante del préstamo:</p>
                              <div>
                                   <p>Fecha y hora del turno solicitado </p>
                                   <div>
                                        <h3>Fecha:</h3>
                                        <h3>Hora:</h3>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Modal>
          </>
     )
}
