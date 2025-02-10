import ProductList from "../components/Productlist";
import "./App.css";
import { UsingState } from "./State/UsingState";
import Lifecycle from "./lifecycle/Lifecycle";
import UnmountDemo from "./lifecycle/UnmontDemo";
function App() {
  return (
    <>
      <ProductList />
      <UsingState />
      <Lifecycle />
      <UnmountDemo />
    </>
  );
}

export default App;
