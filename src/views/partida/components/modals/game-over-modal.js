import { Icon } from "@iconify/react";
import { Modal } from "../../../shared/modal/modal";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AppContext } from "../../../../context/app-context";

export const GameOverModal = (props) => {
    const { appStatus, dispatch } = useContext(AppContext);
    const { visible, setVisible, onPlayAgain,  onReturnToMenu } = props;
    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            hideCloseButton={true}>
            <div className="flex flex-col items-center">
                <Icon icon={'fa6-solid:face-sad-tear'} style={{ fontSize: 50, color:'#670000' }}  />
                <p className="titulo text-lg m-1">Perdiste!</p>
                <p className="text-center">No has podido entregar tu trabajo a tiempo.</p>
                <p className="text-center m-1" style={{fontWeight:'bold'}}>La palabra era: {appStatus?.palabra || 'N/A'}</p>
                <div className="flex flex-row">
                <button className="primary-button-bordered border-medium p-1 m-2" onClick={() => onReturnToMenu && onReturnToMenu()}>Menu</button>
                <button className="primary-button-bordered border-medium p-1 m-2" onClick={() => onPlayAgain && onPlayAgain()}>Jugar de nuevo</button>
                </div>
            </div>
        </Modal>
    )
}


GameOverModal.propTypes = {
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
     onPlayAgain: PropTypes.func,
    /**
     * Función callback que se dispara cuando se oprime el botón de menu
     */
     onReturnToMenu: PropTypes.func
}
