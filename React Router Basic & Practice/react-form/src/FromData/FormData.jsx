import React from 'react';

const FormData = () => {
    const eventHanddler = (formData) =>{
console.log(formData.get ('name'));
console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={eventHanddler}>
                <input type='text' name='name' placeholder='Enter your name '></input>
                <br></br>
                <input type='email' name='email' placeholder='Enter your email'></input>
                <br></br>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default FormData;