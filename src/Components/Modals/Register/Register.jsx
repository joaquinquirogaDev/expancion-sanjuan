import React from 'react'
import Modal from 'react-modal';

// Styles
import style from '../Modal.module.css'

// React Icons
import { IoClose } from "react-icons/io5";

// Images
import User from '../../../assets/images/user.svg'
import LogoCompleto from '../../../assets/images/logos/logoCompleto.svg'


const customStyles = {
     content: {
          top: '50%',
          left: '50%',
          maxHeight: '500px',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflowY: 'scroll'
     },
};

export default function Register() {

     const [modalIsOpen, setIsOpen] = React.useState(false);

     function openModal() {
          setIsOpen(true);
     }

     function closeModal() {
          setIsOpen(false);
     }

     return (
          <>
               <button onClick={openModal} className='btn__bordo'>CREAR CUENTA</button>
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
               >
                    <div className={style.modal__head}>
                         <IoClose onClick={closeModal} />
                    </div>
                    <div className={style.modal__body}>
                         <div className={style.modal__register__container}>
                              <div className={style.modal__register__logo}>
                                   <img src={User} alt="" />
                                   <h3>Crear cuenta</h3>
                                   <img src={LogoCompleto} alt="" className={style.modal__register__logo__prod} />
                              </div>
                              <div className={style.modal__register__inputs}>
                                   <div className={style.modal__register__input}>
                                        <input type="text" placeholder='Ingresa tu nombre' />
                                        <input type="text" placeholder='Ingresa tu apellido' />
                                   </div>
                                   <div className={style.modal__register__input}>
                                        <input type="number" placeholder='Ingresa tu DNI' />
                                        <input type="number" placeholder='Ingresa tu teléfono' />
                                   </div>
                                   <div className={style.modal__register__input}>
                                        <input type="text" placeholder='Ingresa tu dirección' />
                                        <input type="email" placeholder='Ingresa tu correo electrónico' />
                                   </div>
                                   <div className={style.modal__register__input}>
                                        <input type="password" placeholder='Ingresa tu contraseña ' />
                                        <input type="password" placeholder='Confirma tu contraseña ' />
                                   </div>
                              </div>
                              <div className={style.modal__register__btns}>
                                   <button className='btn__bordo'>CREAR CUENTA</button>
                                   <button onClick={closeModal} className='btn__bordo'>CANCELAR</button>
                              </div>
                         </div>
                    </div>
               </Modal>
          </>
     )
}
