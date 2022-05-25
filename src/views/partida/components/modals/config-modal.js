import { Modal } from "../../../shared/modal/modal";
import PropTypes from 'prop-types';

export const ConfigModal = (props) => {
    const { visible, setVisible, onRestartGame, onReturnToMenu } = props;
    return (
        <Modal
            title={'Configuración'}
            visible={visible}
            setVisible={setVisible}>
            <div className="flex flex-col items-center">
                <button 
                    className="primary-button-bordered border-medium p-1 m-2" id="menu-btn" 
                    onClick={() => onReturnToMenu && onReturnToMenu()}>Menu</button>
                <button 
                    className="primary-button-bordered border-medium p-1 m-2" id="again-btn"
                    onClick={() => onRestartGame && onRestartGame()}>Jugar de nuevo</button>
            </div>
        </Modal>
    )
}


ConfigModal.propTypes = {
    /**
* define si debe o no mostrarse el modal
*/
    visible: PropTypes.bool,
    /**
 * Función que oculta o muestra el modal
 */
    setVisible: PropTypes.func,
    /**
     * Función callback que se dispara cuando se oprime el botón para reiniciar el juego
     */
     onRestartGame: PropTypes.func,
    /**
     * Función callback que se dispara cuando se oprime el botón de menu
     */
    onReturnToMenu: PropTypes.func
}
