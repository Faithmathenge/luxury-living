import { useState } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
  const [people, setPeople] = useState([]);
  const [username, setUsername] = useState("");

  const getUserData = async (username) => {
    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN;

      let response = await axios({
        method: "Get",
        url: `https://api.github.com/search/users?q=${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      });
      setPeople(response.data.items);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  return (
    <div>
      <TopNav setPeople={setPeople} />
      <InfoSection people={people} />
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GithubProject;
