import React from 'react';

const SimpleForm = () => {
    const eventHanddler = (e) =>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={eventHanddler}>
                <input type='text' name='name' placeholder='Enter your name '></input>
                <br></br>
                <input type='email' name='email' placeholder='Enter your email'></input>
                <br></br>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default SimpleForm;