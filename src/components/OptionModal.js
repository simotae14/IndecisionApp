import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Opzione Selezionata"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Opzione Selezionata</h3>
        {
            props.selectedOption && <p>{props.selectedOption}</p>
        }
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;