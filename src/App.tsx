import { useState } from "react";
import MentorList from "./components/mentorList";
import NavBar from "./components/NavBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {" "}
      <NavBar setSearchTerm={setSearchTerm} />
      <MentorList searchTerm={searchTerm} />
    </>
  );
}

export default App;
