import { useContacts } from "../context/ContactContext";

const ShowModal = () => {
  const { selected, setSelected, deleteContact } = useContacts();

  if (!selected || selected.mode !== "show") return null;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteContact(selected.id);
      setSelected(null);
    }
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <p><strong>First Name:</strong> {selected.first_name}</p>
          <p><strong>Last Name:</strong> {selected.last_name}</p>
          <p><strong>Email:</strong> {selected.email}</p>
          <p><strong>Phone:</strong> {selected.phone || "N/A"}</p>
          <p><strong>Message:</strong> {selected.text}</p>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
