const Persons = ({ persons, filter, remove }) => {
  return (
    <ul>
      {Array.isArray(persons) &&
        persons
          .filter((person) => {
            if (filter === "") return true;
            return person.name.toLowerCase().includes(filter);
          })
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.num} <button onClick={remove.bind(this, { name: person.name, id: person.id })}>delete</button>
            </li>
          ))}
    </ul>
  );
};
export default Persons;