import React, {useState} from 'react';

function ImgForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        img: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        if(e.target.name === 'img'){
            setFormData({...formData, img:e.target.files[0]});
        }else{
            setFormData({...formData, [e.target.name]:e.target.value});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='name' value={formData.name} onChange={handleChange} />
            <input type='text' name='email' placeholder='email' value={formData.email} onChange={handleChange}/>
            <input type='text' name='message' placeholder='message' value={formData.message} onChange={handleChange}/>
            <input type='file' name='img' accept='image/*' onChange={handleChange}/>
            <input type='submit' name='submit' value='Submit'/>
        </form>
    )
}

export default ImgForm;