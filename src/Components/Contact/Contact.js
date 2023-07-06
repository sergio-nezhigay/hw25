import React from "react";
import "./Contact.css";

export default function Contact({ name, username, phone, deleteContact }) {
  return (
    <div className="contactRow">
      <div className="names">
        <span>{name}</span>
        <span>{username}</span>
      </div>

      <span>{phone}</span>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
}
