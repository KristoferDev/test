import React, { useState, useEffect } from 'react';
import InputField from '../Input/Input';

const Form = () => {
  const [submitForm, setSubmitForm] = useState();
  const [fieldValue, setFieldValue] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: 0,
    password: '',
  });

  useEffect(() => {
    if(submitForm !== undefined) {
      console.log('Sending', submitForm);
    }
  }, [submitForm]);

  const onChangeHandle = (e) => {
    const { name, value, checked, type } = e.target;
    setFieldValue({
      ...fieldValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    setSubmitForm({
      ...submitForm,
      name: fieldValue.name,
      lastname: fieldValue.lastname,
      email: fieldValue.email,
      phone: fieldValue.phone,
      password: fieldValue.password,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField 
        name="name" 
        type="text"
        value={fieldValue.name} 
        onChangeHandle={onChangeHandle} 
        />
      <InputField
        name="lastname"
        type="text"
        value={fieldValue.lastname} 
        onChangeHandle={onChangeHandle} 
        />
      <InputField 
        name="email"
        type="email"
        value={fieldValue.email} 
        onChangeHandle={onChangeHandle} 
        />
      <InputField 
        name="phone"
        type="tel"
        value={fieldValue.phone} 
        onChangeHandle={onChangeHandle} 
        />
      <InputField 
        name="password"
        type="password" 
        value={fieldValue.password} 
        onChangeHandle={onChangeHandle} 
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
