import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Form from "./components/Form.js"
function App() {
  return (
    <div>
      <NavBar name={"Blah"}/>
      <div className="flex flex-row justify-items-spacebetween">
        <SideNav/>
        <Form />
      </div>
    </div>
  );
}

export default App;
