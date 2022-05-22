import { Icon } from "@iconify/react";
import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



export const Modal = (props) => {
    const { title, visible, setVisible, hideCloseButton } = props;

    const close = () => {
            setVisible&&setVisible(false);
    }

    return ReactDOM.createPortal(<div className={`modal-container ${visible?'visible':'hidden'}`}>
        <div className={`modal`}>
            <div className="title-bar">
                <p className="title">{title}</p>
                {
                    Boolean(hideCloseButton)===false&&
                <Icon icon="carbon:close" className="close-button" onClick={()=>close()} />
                }
            </div>
            <div className="body">
                {props?.children}
            </div>
        </div>
    </div>,
        document.getElementById('modal-container')
    )
}

Modal.propTypes = {
    /**
     * titulo del modal
     */
    title:PropTypes.string,
    /**
* define si debe o no mostrarse el modal
*/
visible: PropTypes.bool,
/**
* Función que oculta o muestra el modal
*/
setVisible: PropTypes.func,
}
