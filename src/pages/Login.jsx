import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Wrapper from "../assets/wrappers/Login";
import { Form, useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAppContext } from "../context";
import useLocalState from "../utils/localState";
import customFetch from "../axios";

const Login = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, password } = values;
    const loginUser = { email, password };
    try {
      const { data } = await customFetch.post("/auth/login", loginUser);
      setValues({ name: "", email: "", password: "" });
      showAlert({
        text: `Welcome, ${data.user.name}. Redirecting to dashboard...`,
        type: "success",
      });
      setLoading(false);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      console.log("login error: ", error.response.data.msg);
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <div className="page">
        <Form className="form" method="POST" onSubmit={onSubmit}>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-input"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-input"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block"
            style={{ margin: "0.5rem" }}
          >
            submit
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
