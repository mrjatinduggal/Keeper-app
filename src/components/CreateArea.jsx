import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [showUp, setShowUp] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: showUp && "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick={() => setShowUp(false)}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={showUp ? "1" : "3"}
        />
        {!showUp && <button onClick={submitNote}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;
