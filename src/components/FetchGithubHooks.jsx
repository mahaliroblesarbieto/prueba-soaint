import React, { useState, useEffect } from "react";

const FetchGithubHooks = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/workshopsjsmvd")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setName(data.name);
          setLocation(data.location);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 key="name"> {`Nombre: ${name}`} </h1>
      <h2 key="location"> {`País: ${location}`} </h2>
    </>
  );
};

export default FetchGithubHooks;
