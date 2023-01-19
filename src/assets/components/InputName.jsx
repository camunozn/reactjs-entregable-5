import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../../store/slices/userName.slice";

const InputName = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>InputName</h2>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(changeUserName(user));
          navigate("/pokedex");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputName;
