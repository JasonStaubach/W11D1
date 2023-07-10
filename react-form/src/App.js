

function App() {
  return (
    // <h1>Hi from app</h1>
    <form className="form">
      <label>Name:
        <input type="text" placeholder="name"></input>
      </label>

      <label>Email:
        <input type="text" placeholder="email"></input>
      </label>

      <label>Phone Number:
        <input type="text" placeholder="phone number"></input>
      </label>

      <label>Phone type:
        <select name="Phone type">
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </label>

      <label>Instructor
        <input type="radio" name="role" value="Instructor"></input>
      </label>
      <label>Student
        <input type="radio" name="role" value="Student"></input>
      </label>

      <label>Bio
        <input type="textarea"></input>
      </label>

      <label>Email Notifications
        <input type="checkbox" name="emailNotifications"></input>
      </label>
      
    </form>
  );
}

export default App;
