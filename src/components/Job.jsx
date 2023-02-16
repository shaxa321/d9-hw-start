import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const [selected, setSelected] = useState(false);
  console.log("Job", selected);

  const colorClass = () => {
    if (selected === true) return "color";
    else return "colorNo";
  };

  const dispatch = useDispatch();

  var isSelected = useSelector((state) => state.favourites).find(
    (obj) => obj._id === data.id
  );
  isSelected ? (isSelected = true) : (isSelected = false);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <BsFillCheckCircleFill
          className={colorClass()}
          onClick={(e) => {
            console.log("questo è un Dispatch");
            selected === false ? setSelected(true) : setSelected(false);

            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: data,
            });

            dispatch({
              type: "DEL_FROM_FAVOURITES",
              payload: data,
            });
          }}
        />
      </Col>
    </Row>
  );
};

export default Job;
