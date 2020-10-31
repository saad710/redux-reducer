import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from './patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    console.log(state.patients);
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(nameRef.current.value);
        dispatch({
            type:'ADD_PATIENT',
            name:nameRef.current.value,
            id:state.patients.length + 1
        })
            nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management:{state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}/>
            </form>
            {
                state.patients.map(pt => <li
                key = {pt.id}
                onClick =  {() => dispatch({type:"REMOVE_PATIENT", id: pt.id})  }
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;