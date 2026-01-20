import React from "react";
import ContactTable from "../components/ContactTable";
import ShowModal from "../components/ShowModal";
import EditModal from "../components/EditModal";
import { Link } from "react-router-dom";
import { useContacts } from "../context/ContactContext";

const Home = () => {
  const { setSearch, setFilter } = useContacts();

  return (
    <main className="py-5 container">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h2>All Contacts</h2>
          <Link to="/add" className="btn btn-success">
            Add New
          </Link>
        </div>

        <div className="p-3 d-flex justify-content-between">
          <input
            className="form-control w-50"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-25"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="fname">First Name (A → Z)</option>
            <option value="lname">Last Name (A → Z)</option>
            <option value="old">Oldest To First</option>
          </select>
        </div>

        <ContactTable />
      </div>

      <ShowModal />
      <EditModal />
    </main>
  );
};

export default Home;  
