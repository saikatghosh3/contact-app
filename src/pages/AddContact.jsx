import { useContacts } from "../context/ContactContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact } = useContacts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1); // go back safely
  };

  return (
    <main className="py-5">
      <div className="container col-md-6">
        <div className="card shadow-sm">
          <div className="card-header bg-light">
            <h5 className="mb-0">Add New Contact</h5>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  className="form-control"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  className="form-control"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>


              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddContact;
