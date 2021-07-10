import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../actions/notes'
import { useForm } from '../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active: note} = useSelector(state => state.notes);
    const [ formValues, handleInputChanged, reset ] = useForm( note );

    const dispatch = useDispatch()
    const activeId = useRef( note.id )

    const { body, title, id } = formValues; 

    // Cambia la nota activa al cambiar de selección
    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote( formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <form className="notes__content">
                    <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-inputs"
                        autoComplete="off"
                        value={ title }
                        name="title"
                        onChange= { handleInputChanged }                    
                    />

                    <textarea 
                        className="notes__textarea"
                        placeholder="what happend today?"
                        value={ body }
                        name="body"
                        onChange= { handleInputChanged }
                    ></textarea>

                    {
                        (note.url) 
                        &&
                        <div className="notes__image">
                        <img 
                            src={ note.url }
                            alt="galaxy_image"
                        />
                    </div>
                    }
                </form>
                <button 
                    className="btn btn-danger" 
                    onClick={ handleDelete }
                >
                    Delete
                </button>

            </div>
        </div> 
    )
}
