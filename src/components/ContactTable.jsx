import { useContacts } from "../context/ContactContext";

const ContactTable = () => {
  const { contacts, setSelected, search, filter, deleteContact } = useContacts();

  let data = [...contacts];

  if (search) {
    data = data.filter((c) =>
      Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filter === "fname")
    data.sort((a, b) => a.first_name.localeCompare(b.first_name));
  if (filter === "lname")
    data.sort((a, b) => a.last_name.localeCompare(b.last_name));
  if (filter === "old") data.sort((a, b) => a.id - b.id);

  if (!data.length)
    return <p className="text-center p-3">No Contact Information</p>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((c, i) => (
          <tr key={c.id}>
            <td>{i + 1}</td>
            <td>{c.first_name}</td>
            <td>{c.last_name}</td>
            <td>{c.email}</td>
            <td>{c.phone || "-"}</td>

            {/* ✅ ICON ACTIONS */}
            <td className="text-center">
              {/* SHOW */}
              <i
                className="bi bi-eye-fill text-info me-3"
                role="button"
                title="Show"
                onClick={() => setSelected({ ...c, mode: "show" })}
              />

              {/* EDIT */}
              <i
                className="bi bi-pencil-square text-secondary me-3"
                role="button"
                title="Edit"
                onClick={() => setSelected({ ...c, mode: "edit" })}
              />

              {/* DELETE (MISSING → FIXED) */}
              <i
                className="bi bi-trash-fill text-danger"
                role="button"
                title="Delete"
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    deleteContact(c.id);
                  }
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
