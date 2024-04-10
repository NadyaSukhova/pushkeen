import List from "../components/list";
import Text from "../components/text";
import ListWrap from "../components/list-wrap";
function App() {
  const allTexts = (
    <>
      {[...Array(12).keys()].map((id) => (
        <Text id={`text-${id}`} />
      ))}
    </>
  );
  return <ListWrap list={<List texts={allTexts} />} />;
}

export default App;
