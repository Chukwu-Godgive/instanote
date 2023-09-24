import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import popUp from "sweetalert2";

function EditNote() {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://instanoteserver.onrender.com/api/note/${id}`)
      .then((res) => {
        setNote({
          title: res.data.title,
          body: res.data.body,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleInput = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: note.title,
      body: note.body,
    };

    axios
      .patch(`https://instanoteserver.onrender.com/api/note/${id}`, data)
      .then((res) => {

        if (res.status === 200) {
          popUp.fire({
            icon: "success",
            title: "Note updated!",
            showConfirmButton: false,
            timer: 1500,
          });
          setNote({ title: "", body: "" });
        }
        // navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  return (
    <div className="edit-note">
      <h1>Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="body"
            value={note.body}
            onChange={handleInput}
            // value={content}
            // onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button style={CustomButton}>Update</button>
      </form>
    </div>
  );
}

export default EditNote;
