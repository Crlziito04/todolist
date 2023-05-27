import "./TodoItem.css";
import { CompleteIcon } from "../../Icons/CompleteIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onCheck={props.onCheck} />
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCheck}
      >
        ✓
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
        ✕
      </span> */}
    </li>
  );
}
export { TodoItem };
