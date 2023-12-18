import { useState } from "react";
import axios from "axios";
import "./App.css";

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
}

function App() {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      console.log(response); //Will result in an error because the above endpoint doesn't exist yet
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={40}
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="pass"
            onChange={handleChange}
            value={formData.password}
            required
            maxLength={15}
          />
          <br />
        </div>

        <button>Sign Up</button>
      </form>
    </>
  );
}

export default App;
