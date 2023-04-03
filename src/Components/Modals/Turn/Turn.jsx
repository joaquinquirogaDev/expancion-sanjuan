import React from 'react'
import Modal from 'react-modal';

// Styles
import style from '../Modal.module.css'

// React Icons
import { IoClose } from "react-icons/io5";

// Images
import LogoCompleto from '../../../assets/images/logos/logoCompleto.svg'

const customStyles = {
     content: {
          width: '100%',
          maxWidth: '600px',
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
                              <div className={style.modal__turn__title}>
                                   <h2>Tu turno será solicitado con los siguientes datos:</h2>
                              </div>
                              <p>Nombre y Apellido del solicitante del préstamo:</p>
                              <div className={style.modal__turn__date}>
                                   <p>Fecha y hora del turno solicitado </p>
                                   <div>
                                        <h3>Fecha:</h3>
                                        <h3>Hora:</h3>
                                   </div>
                                   <button className='btn__bordo'>EDITAR</button>
                              </div>
                              <div className={style.modal__turn__data}>
                                   <p>Tamaño de empresa: </p>
                                   <h3>Micro</h3>
                                   <p>Tipo de empresa:</p>
                                   <h3>Explotación Unipersonal</h3>
                                   <p>Monto:</p>
                                   <h3>$10.000</h3>
                                   <p>Necesidad financiera </p>
                                   <h3>Inversiones</h3>
                                   <p>De que manera te enteraste de expansión San Juan:</p>
                                   <h3>Redes sociales</h3>
                                   <button className='btn__bordo'>EDITAR</button>
                              </div>
                              <div className={style.modal__turn__btn}>
                                   <button className='btn__bordo'>CONFIRMAR</button>
                                   <img src={LogoCompleto} alt="Ministerio de produccion" />
                              </div>
                         </div>
                    </div>
               </Modal>
          </>
     )
}
