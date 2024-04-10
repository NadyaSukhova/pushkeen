import "./style.css";

function Text({ id }) {
  function changeActivity(id) {
    const textClasses = document.getElementById(id).classList;
    if (textClasses.contains("Text-active")) textClasses.remove("Text-active");
    else textClasses.add("Text-active");
  }

  return (
    <div
      className="Text"
      id={id}
      onClick={() => {
        changeActivity(id);
      }}
    >
      <div className="Text-Header">Lorem Ipsum dolor sit</div>
      <div className="Text-Body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}

export default Text;
