import React from "react";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, ...rest }) => (
        <li key={id}>
          <Contact {...rest} deleteContact={() => deleteContact(id)} />
        </li>
      ))}
    </ul>
  );
}
