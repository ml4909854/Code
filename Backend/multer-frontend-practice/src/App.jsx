import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    profileImage: null,
  });

  const [message, setMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("firstname", formData.firstname);
    data.append("lastname", formData.lastname);
    data.append("profileImage", formData.profileImage);

    try {
      const response = await axios.post("http://localhost:3000/user", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { user, message } = response.data;
      setMessage(message || "User created successfully");
      setPreviewUrl(`http://localhost:3000/${user.imageUrl}`);
    } catch (err) {
      console.error(err);
      const errorMessage =
        typeof err.response?.data === "string"
          ? err.response.data
          : err.response?.data?.error || "Upload failed";
      setMessage(errorMessage);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>Upload User Profile</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit" style={{ marginTop: "10px" }}>
          Upload
        </button>
      </form>

      {message && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <strong>
            {typeof message === "string"
              ? message
              : JSON.stringify(message, null, 2)}
          </strong>
        </div>
      )}

      {previewUrl && (
        <div style={{ marginTop: "1rem" }}>
          <p>Uploaded Image Preview:</p>
          <img
            src={previewUrl}
            alt="Uploaded"
            style={{ maxWidth: "200px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
