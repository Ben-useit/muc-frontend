import Wrapper from "../assets/wrappers/Register";
const Register = () => {
  return (
    <Wrapper>
      <div className="page">
        <form className="form" method="POST">
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input type="text" className="form-input" name="name" id="name" />
          </div>

          <div className="form-row">
            <label htmlFor="lastName" className="form-label">
              lastName
            </label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              id="lastName"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input type="text" className="form-input" name="email" id="email" />
          </div>
          <button
            type="submit"
            className="btn btn-block"
            style={{ margin: "0.5rem" }}
          >
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
