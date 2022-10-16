import "./cards-component.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="cards">
      <img
        alt={`monsters`}
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
