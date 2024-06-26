import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Modal from '../../../Layouts/Modal';
import { deleteCookieClient, getCookiesClient, logoutClient } from '../../../../api/Client/Auth';
import { setIsLoginClient } from '../../../../redux/reducer/auth/auth.reducer';

export default function LogoutClient(props) {
  const [backdrop, setBackdrop] = React.useState('static');

  const dispatch = useDispatch();

  const handleLogout = async () => {
    setBackdrop('static');
    const response = await logoutClient();
    if (response === 500) {
      setBackdrop('static');
    }
    if (response === 401) {
      props.setStateModal();
    }
    if (response === 200) {
      const token = getCookiesClient('tokenClient');
      dispatch(setIsLoginClient(false));
      if (token) {
        deleteCookieClient('tokenClient');
      }

      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    }
  };

  return (
    <Modal
      show={props.show}
      backdrop={backdrop}
      setStateModal={() => props.setStateModal()}
      elementModalTitle={<p className="text-black">Thông báo</p>}
      elementModalBody={
        <div className="p-3">
          <h6 className="mb-3">Bạn muốn đăng xuất?</h6>
          <div className="d-flex align-items-center justify-content-end">
            <Button type="submit" variant="primary" className="me-3 font-weight-bold" onClick={() => handleLogout()}>
              Đăng xuất
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="font-weight-bold"
              onClick={() => props.setStateModal()}
            >
              Hủy
            </Button>
          </div>
        </div>
      }
    />
  );
}
