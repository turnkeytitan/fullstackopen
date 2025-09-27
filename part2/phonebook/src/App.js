import { useEffect, useState } from "react";
import PersonsService from "./services/persons";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import Notification from "./components/notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState({ text: null, type: null });
  useEffect(() => {
    getPersons();
  }, []);
  const newMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: null, type: null });
    }, 5000);
  };
  const getPersons = () => {
    PersonsService.getAll().then((response) => {
      setPersons(response.data);
    });
  };
  const addRecord = (event) => {
    event.preventDefault();
    if (
      !persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())
    ) {
      const newPerson = { name: newName, number: newPhone };
      PersonsService.create(newPerson)
        .then(({ data }) => {
          newMessage(`${newName} added`, "success");
          getPersons();
        })
        .catch((err) => {
          newMessage(err.response.data.message, "error");
        });
    } else {
      const person = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        PersonsService.update(person.id, { ...person, number: newPhone })
          .then(() => {
            newMessage(`${newName} updated`, "success");
            getPersons();
          })
          .catch((err) => {
            console.log(err);
            newMessage(err.response.data.message, "error");
          });
      }
    }
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };
  const handleNewFilter = (event) => {
    setFilter(event.target.value);
  };
  const remove = ({ name, id }) => {
    if (window.confirm(`Delete ${name}?`)) {
      PersonsService.remove(id).then((response) => {
        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}></Notification>
      <Filter
        filter={filter}
        handleNewFilter={handleNewFilter}
      />
      <h2>Add a new</h2>
      <PersonForm
        addRecord={addRecord}
        newName={newName}
        handleNewName={handleNewName}
        newPhone={newPhone}
        handleNewPhone={handleNewPhone}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        remove={remove}
      />
    </div>
  );
};

export default App;
