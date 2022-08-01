function ListItem({ title, status, handleDelete }) {
  const style = { display: "flex", gap: 8, justifyContent: "center" };
  return (
    <li>
      {title} - {status ? "DONE" : "NOT DONE"}
      {"    "}
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}
export default ListItem;
