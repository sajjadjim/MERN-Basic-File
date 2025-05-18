import React from 'react';

const ControlField = () => {
    const handleSubmit = (e) =>{
e.preventDefault();
console.log("submitted info ")
    }
    return (
        <div>
            <form onSubmit={ handleSubmit}>
                <input style={{padding:'5px'}} type='email' placeholder='enter email' required id=''></input>
                <br></br>
                <input style={{padding:'5px' , marginTop:'5px'}} type='password' placeholder='enter password' required></input>
                <br></br>
                <input type="submit" value="submit" />
            </form>
         </div>
    );
};

export default ControlField; 