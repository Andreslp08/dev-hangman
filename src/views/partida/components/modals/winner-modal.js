import { Icon } from "@iconify/react";
import { Modal } from "../../../shared/modal/modal";
import PropTypes from 'prop-types';

export const WinnerModal = (props) => {
    const { visible, setVisible,  onPlayAgain } = props;
    return (
        <Modal
            visible={visible}
            setVisible={setVisible}>
            <div className="flex flex-col items-center">
                <Icon icon={'emojione-v1:crown'} style={{ fontSize: 50 }} />
                <p className="titulo text-lg m-1">Ganaste!</p>
                <p className="text-center">Has entregado tu trabajo a tiempo.</p>
                <button className="primary-button-bordered border-medium p-1 m-2" onClick={() => onPlayAgain && onPlayAgain()}>Jugar de nuevo</button>
            </div>
        </Modal>
    )
}


WinnerModal.propTypes = {
    /**
* define si debe o no mostrarse el modal
*/
    visible: PropTypes.bool,
    /**
 * Función que oculta o muestra el modal
 */
    setVisible: PropTypes.func,
    /**
     * Función callback que se dispara cuando se oprime el botón de jugar de nuevo.
     */
     onPlayAgain: PropTypes.func
}
