import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm('mwkgaroz');

    if (state.succeeded) {
        return <h1 className='thanks'>¡Gracias por tu mensaje!</h1>;
    }

    return (
        <section className='contact'>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Nombre:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        required
                    />
                    <ValidationError
                        prefix='Name'
                        field='name'
                        errors={state.errors}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Correo electrónico:</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        required
                    />
                    <ValidationError
                        prefix='Email'
                        field='email'
                        errors={state.errors}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>Mensaje:</label>
                    <textarea
                        id='message'
                        name='message'
                        required
                    />
                    <ValidationError
                        prefix='Message'
                        field='message'
                        errors={state.errors}
                    />
                </div>

                <button type='submit' disabled={state.submitting}>Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
