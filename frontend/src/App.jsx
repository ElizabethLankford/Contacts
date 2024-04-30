import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  return (
    <>
      <ContactList contacts={contacts} />
      <button onClick={() => setIsModal((prev) => !prev)}>
        create new contact
      </button>
      {isModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModal((prev) => !prev)}>
              &times;
            </span>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
