import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { employees } from "../imgs/data";

const HTMLTarget = () => {
  const params = useParams();
  const sp = useSearchParams();
  useEffect(() => {
    console.log(sp);
  }, [sp]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onClick = useCallback(() => {
    const name = prompt("What is your name?");
    const age = prompt("How old are you?");
    setName(name ?? "");
    setAge(age ?? "");
  }, []);
  return (
    <div>
      <h1>This is Target page: {params.tag}</h1>
      <h1>
        {name} {age}
      </h1>
      <button onClick={onClick}>CLICK ME</button>
      {employees.map((person, i) => (
        <p key={i}>
          {person.firstName} {person.lastName}
        </p>
      ))}
    </div>
  );
};

export default HTMLTarget;
