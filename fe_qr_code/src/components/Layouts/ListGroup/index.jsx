import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup as ListGroupBootstrap } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import Skeleton from '../Skeleton';
import './style.css';

export default function ListGroup(props) {
  const { data, handleNavLinkClick, setShowOffcanvas } = props;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Skeleton column={1} />
  ) : (
    <ListGroupBootstrap id="list-group" as="ul">
      {data.map((element) => {
        return (
          <NavLink
            to={element.link}
            key={element.id}
            className={({ isActive }) => (isActive ? 'app-active-link' : ' app-not-active-link')}
            onClick={(e) => {
              props.handleNavLinkClick(e); // Gọi hàm handleNavLinkClick từ props
              setShowOffcanvas(false); // Đặt trạng thái của offcanvas về false khi người dùng nhấp vào mục
            }}
          >
            <ListGroupBootstrap.Item className="py-2 d-flex align-items-center" as="li">
              <h5>{element.icon}</h5>
              <h5 className="font-weight-bold ms-3">{element.name}</h5>
            </ListGroupBootstrap.Item>
          </NavLink>
        );
      })}
    </ListGroupBootstrap>
  );
}

ListGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ),
};
