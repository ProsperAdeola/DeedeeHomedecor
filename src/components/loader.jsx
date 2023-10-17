import style from "./loader.module.css";
import Spinner from 'react-bootstrap/Spinner';

function Spin() {
  return (
    <Spinner className={style.spinner} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Spin;