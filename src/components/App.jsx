import { Container, Form, FormHeader, Label, Input } from "./App.styled.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    os: "Windows",
    parameters: "",
    value: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOsChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, os: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Label>Age:</Label>
          <Input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </FormHeader>
        <div>
          <Label>Operating System:</Label>
          <select name="os" value={formData.os} onChange={handleOsChange}>
            <option value="Windows">Windows</option>
            <option value="macOS">macOS</option>
            <option value="Linux">Linux</option>
          </select>
        </div>
        <div>
          <Label>Parameters:</Label>
          <Input
            type="text"
            name="parameters"
            value={formData.parameters}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label>Value:</Label>
          <Input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button">Add</button>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
