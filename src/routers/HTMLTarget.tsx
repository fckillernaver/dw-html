import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
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
    // const isTrue = confirm(
    //   "are you sure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt aliquam, assumenda omnis deserunt ex suscipit praesentium? 확인을 누르시면 실행됩니다."
    // );
    // if (isTrue) {
    //   alert("확인함");
    // } else {
    //   alert("cancel");
    // }
    // const name = { first: "dexter", last: "" };
    // let name = { first: "dexter", last: "" };
    // const name, dob, address;
    // var name, dob, address;
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
