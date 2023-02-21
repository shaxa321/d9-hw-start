import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_FAVOURITES } from "../redux/actions/index.js";
import { DEL_FROM_FAVOURITES } from "../redux/actions/index.js";

const Job = ({ data }) => {
  const fav = useSelector((state) => state.favourties);

  const colorClass = () => {
    if (fav.some((element) => element._id === data._id)) return "colorYes";
    else return "colorNo";
  };

  const dispatch = useDispatch();

  var isSelected = useSelector((state) => state.favourties).includes(
    (obj) => obj._id === data._id
  );

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
            console.log("data", data);

            console.log("questo è un Dispatch");

            fav.some((element) => element._id === data._id)
              ? dispatch({
                  type: DEL_FROM_FAVOURITES,
                  payload: data,
                })
              : dispatch({
                  type: ADD_TO_FAVOURITES,
                  payload: data,
                });
          }}
        />
      </Col>
    </Row>
  );
};

export default Job;
