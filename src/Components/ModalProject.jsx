import React from 'react';
import "./modal-project.css";

const ModalProject = ({active, setActive, children}) => {
    return (
        <div className={active ? "project active" : "project"} onClick={() => setActive(false)}>
            <div className={active ? "project__content active" : "project__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalProject;