import {useState} from 'react'

export default function App() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phoneType: '',
    role: '',
    bio: '',
    emailNotifications: ''
  });

  const [errors,setErrors] = useState([]);

  const validate = () => {
    let errors = [];

    if (user.name.length === 0) errors.push('Name cannot be blank');
    if (user.email.length === 0 || !user.email.includes('@')) errors.push('Email is invalid')
    if (user.phoneNumber && user.phoneNumber.length !== 12) errors.push('Phone Number is invalid')
    if (user.phoneNumber && !user.phoneType) errors.push('Must select phone type')
    if (user.bio.length > 280) errors.push('Bio must be within 280 characters')

    return errors;
  }

  const handleChange = (field) => {
    return (e) => {
      const newObj = Object.assign({}, user, {[field]: e.target.value});
      setUser(newObj);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    setErrors(errors);

    if (errors.length === 0) {
      setUser({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        role: '',
        bio: '',
        emailNotifications: ''
      })
    }
  }

  const showErrors = () => {
    if (errors.length > 0) {
      return (
        <ul>
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      )
    }
  }

  return (
    
    <form className="form" onSubmit={handleSubmit}>
      {showErrors()}

      <label>Name:
        <input type="text" placeholder="name" onChange={handleChange('name')} value={user.name}></input>
      </label>
      <br/>

      <label>Email:
        <input type="text" placeholder="email" onChange={handleChange('email')} value={user.email}></input>
      </label>
      <br/>

      <label>Phone Number:
        <input type="text" placeholder="e.g. 123-456-7890" onChange={handleChange('phoneNumber')} value={user.phoneNumber}></input>
      </label>
      <br/>

      <label onChange={handleChange('phoneType')} value={user.phoneType}>Phone type:
        <select name="Phone type">
          <option></option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </label>
      <br/>

      <label onChange={handleChange('role')} value={user.role}>Instructor
        <input type="radio" name="role" value = 'Instructor'></input>
      </label>
      <label onChange={handleChange('role')} value={user.role}>Student
        <input type="radio" name="role" value = 'Student'></input>
      </label>
      <br/>

      <label>Bio
        <input type="textarea" onChange={handleChange('bio')} value={user.bio}></input>
      </label>
      <br/>

      <label>Email Notifications
        <input type="checkbox" name="emailNotifications" onChange={handleChange('emailNotifications')} value={user.emailNotifications}></input>
      </label>
      <br></br>

      <label>
        <input type='submit'></input>
      </label>
      
    </form>
  );
}
