import "./style.css";
function ListWrap({list}) {
  return (
    <div className="ListWrap">
      <div className="ListWrap-background" />
      {list}
    </div>
  );
}

export default ListWrap;
