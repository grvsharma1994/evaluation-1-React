import { useState } from "react";
function AddItem({handleAddItem}) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
const onClick = () => {
    handleAddItem(text);
    setText("");
  };
  return (
    <div>
      <input onChange={handleChange} value={text} placeholder="Add something" />
      <button onClick={onClick}>ADD</button>
    </div>
  );
}
export default AddItem;


