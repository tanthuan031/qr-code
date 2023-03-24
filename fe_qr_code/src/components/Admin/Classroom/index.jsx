// @flow
import * as React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import CreateClassroom from './CreateClassroom';
import './style.css';
export function ClassRoom(props) {
  const [show, setShowCreate] = React.useState(false);
  return (
    <>
      <div className="row mb-5 justify-content-end ">
        <div className="d-flex justify-content-between">
          <div className="d-flex  "></div>
          <div className="d-flex justify-content-between ">
            <Form>
              <InputGroup>
                <Form.Control
                  id="search-order"
                  placeholder="Code classroom"
                  // onChange={(e) => setSearch(e.target.value)}
                />

                <Button id="search-user" variant="info" type="submit">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
            <Button
              id="create-new-product"
              variant="info"
              className="font-weight-bold ms-3 m-r-15"
              onClick={() => setShowCreate(true)}
            >
              Create classroom
            </Button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col md-3  mb-4 cursor-pointer">
          <div className="classroom_content">
            <div className="classroom_header">
              <div className="classroom_background_header"></div>
              <div className="classroom_content_header">
                <h3>DCT1193</h3>
                <span>Ten giang vien</span>
              </div>
            </div>
            <div className="classroom_footer"></div>
          </div>
        </div>
        <div className="col md-3 mb-4 cursor-pointer">
          <div className="classroom_content">
            <div className="classroom_header">
              <div className="classroom_background_header"></div>
              <div className="classroom_content_header">
                <h3>DCT1193</h3>
                <span>Ten giang vien</span>
              </div>
            </div>

            <div className="classroom_footer"></div>
          </div>
        </div>
        <div className="col md-3 mb-4 cursor-pointer">
          <div className="classroom_content">
            <div className="classroom_header">
              <div className="classroom_background_header"></div>
              <div className="classroom_content_header">
                <h3>DCT1193</h3>
                <span>Ten giang vien</span>
              </div>
            </div>

            <div className="classroom_footer"></div>
          </div>
        </div>
        <div className="col md-3 mb-4 cursor-pointer">
          <div className="classroom_content">
            <div className="classroom_header">
              <div className="classroom_background_header"></div>
              <div className="classroom_content_header">
                <h3>DCT1193</h3>
                <span>Ten giang vien</span>
              </div>
            </div>

            <div className="classroom_footer"></div>
          </div>
        </div>
        <div className="col md-3 mb-4 cursor-pointer">
          <div className="classroom_content">
            <div className="classroom_header">
              <div className="classroom_background_header"></div>
              <div className="classroom_content_header">
                <h3>DCT1193</h3>
                <span>Ten giang vien</span>
              </div>
            </div>

            <div className="classroom_footer"></div>
          </div>
        </div>
      </div>
      <CreateClassroom show={show} setStateModal={() => setShowCreate(false)} />
    </>
  );
}