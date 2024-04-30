/* eslint-disable react/prop-types */

const ContactList = ({ contacts }) => {
  const handleDelete = async (id) => {
    const url = `http://127.0.0.1:5000/delete_contact/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);

    const message = await response.json();
    console.log(message);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button>Update</button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
