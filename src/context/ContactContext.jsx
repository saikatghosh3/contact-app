import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();
export const useContacts = () => useContext(ContactContext);

const API = "https://json-server-api-deks.onrender.com/contacts";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");

  const fetchContacts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    fetchContacts();
  };

  const updateContact = async (id, data) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchContacts();
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        selected,
        setSelected,
        addContact,
        updateContact,
        deleteContact,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
