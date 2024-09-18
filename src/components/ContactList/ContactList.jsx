import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {visibleContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </>
  );
}