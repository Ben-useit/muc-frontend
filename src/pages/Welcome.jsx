import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <div>
        <div className="page">
          <p>
            Fusce vestibulum turpis ac ornare pulvinar. In porttitor elementum
            ante nec auctor. Aliquam dolor magna, gravida non purus vel, luctus
            pellentesque tellus. Nulla leo nibh, rutrum vel dapibus non,
            imperdiet efficitur sapien. Sed tincidunt quam ac enim varius
            varius. Integer tempus dignissim eros et lobortis. Fusce sed neque
            eget metus vehicula posuere. Donec ullamcorper maximus risus a
            ultrices. Proin vitae vehicula ex, in convallis ex. Duis vitae
            mauris maximus, commodo nisl eu, venenatis magna. Proin pretium,
            eros at elementum sodales, mauris lorem vestibulum mauris, et
            finibus nisi nibh ac diam. Aliquam orci ex, congue vel viverra sed,
            blandit sed ipsum. Cras sed pellentesque arcu. Nunc iaculis tempor
            pretium. Ut elementum maximus risus, ut viverra diam tincidunt eu.
            Curabitur ullamcorper dignissim velit dapibus mattis. Sed ornare
            blandit mauris ut interdum. Integer eget pellentesque magna.
            Praesent sapien nisl, vulputate ac aliquam quis, pulvinar eu erat.
            Sed vel turpis lorem. Nulla finibus erat ex. Donec eget sapien et ex
            porta dapibus. Curabitur dictum dui nisi, a luctus ex feugiat nec.
            Pellentesque justo neque, venenatis nec ante ut, ultrices
            sollicitudin mauris. Nullam et ultrices elit, interdum ullamcorper
            urna. Proin pharetra, tortor vitae rhoncus vehicula, mi mi fringilla
            lectus, a lacinia purus elit lacinia eros. Maecenas efficitur turpis
            sem, sagittis interdum nisi rhoncus eget. Morbi leo erat, feugiat ut
            lacinia sit amet, posuere tempor dolor.
          </p>
          <p className="btn-block">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    margin: 1rem 1rem 0 0;
    min-width: 120px;
    text-align: center;
  }
`;

export default Landing;
