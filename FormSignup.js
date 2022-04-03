import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const person ={
    NameLastName:'',
    personalN:'',
    Birthdate:'',
    password:'',
    ConfirmPassword:'',
  }

  window.localStorage.setItem('user', JSON.stringify(person))
  return (

    // <li className='nav-item'> 
    // <select>
    //   <option value = "Student">Teacher</option>
    //   <option value = "Student">Student</option> 
    //   </select>
    //   </>
      
    <div className='form-content-right'>
      
      <form onSubmit={handleSubmit} className='form' noValidate>


        <div className='form-inputs-1'>
          <div style={{width:'10000%', display:'flex', flexDirection:'column', alignItems:'right'}}>
          <li>
            <select>
                <option value="teacher">teacher</option>
               <option value="student">student</option>
            </select>
          </li>
          </div>
          </div>
          <div className='form-inputs'>
          <label className='form-label'>NameLastName</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>personal N</label>
          <input
            className='form-input'
            type='number'
            name='number'
            placeholder='Enter ID number'
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Birth date</label>
          <input
            className='form-input'
            type='date'
            name='date'
            placeholder='Enter Birth date'
            value={values.date}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
