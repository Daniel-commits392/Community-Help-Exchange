import React, {useState} from "react";

function PostForm() {
   const [type, setType] = useState("offer");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newPost = {
            type,
            title,
            description,
            contact
        };
          fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Post submitted!");
        setTitle(""); 
        setDescription("");
        setType("offer");
        setContact("");
      })
      .catch((err) => console.error("Submission error:", err));
  }

  return (
        <form onSubmit={handleSubmit} className="form">
          
      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="offer">Offer</option>
            <option value="request">Request</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </label>
      </div>

      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your description..."
          />
        </label>
      </div>

      <div>
        <label>
          Contact Info:
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Email or phone"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
    