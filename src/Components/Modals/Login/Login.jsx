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
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
     },
};

export default function Login() {

     const [modalIsOpen, setIsOpen] = React.useState(false);

     function openModal() {
          setIsOpen(true);
     }

     function closeModal() {
          setIsOpen(false);
     }

     return (
          <>
               <button onClick={openModal} className='btn__bordo'>INGRESAR</button>
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
                         <div className={style.modal__login}>
                              <div className={style.modal__login__form}>
                                   <img src={User} alt="" />
                                   <h3>Ingresa a tu cuenta</h3>
                                   <div className={style.modal__login__inputs}>
                                        <input type="number" placeholder='Ingresa tu DNI'/>
                                        <input type="password" name="" id="" placeholder='Ingresa tu contraceña'/>
                                   </div>
                                   <div className={style.modal__login__btns}>
                                        <button className='btn__bordo'>INGRESAR</button>
                                        <button onClick={closeModal} className='btn__bordo'>CANCELAR</button>
                                   </div>
                              </div>
                              <div className={style.modal__login__logo}>
                                   <img src={LogoVertical} alt="" />
                              </div>
                         </div>
                    </div>
               </Modal>
          </>
     )
}
