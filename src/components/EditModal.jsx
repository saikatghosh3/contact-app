import { useContacts } from "../context/ContactContext";
import { useState, useEffect } from "react";

const EditModal = () => {
  const { selected, setSelected, updateContact } = useContacts();
  const [form, setForm] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    text: "",
  });

  // ✅ Initialize form when edit icon clicked
  useEffect(() => {
    if (selected?.mode === "edit" && selected?.id) {
      setForm({
        id: selected.id,
        first_name: selected.first_name || "",
        last_name: selected.last_name || "",
        email: selected.email || "",
        phone: selected.phone || "",
        text: selected.text || "",
      });
    }
  }, [selected]);

  // ✅ Modal visibility control
  if (!selected || selected.mode !== "edit") return null;

  const handleUpdate = () => {
    updateContact(form.id, form);

    // ✅ Close modal AFTER update
    setSelected(null);
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          {["first_name", "last_name", "email", "phone", "text"].map((f) => (
            <input
              key={f}
              className="form-control mb-2"
              value={form[f]}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, [f]: e.target.value }))
              }
              placeholder={f.replace("_", " ")}
            />
          ))}

          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setSelected(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
