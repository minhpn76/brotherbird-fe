import React, { memo } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import pathsRoutes from '../../../../helper/pathRoutes';
import './cart.css'

function EmptyCart() {
    const history = useHistory();
    return (
        <Row style={{textAlign: 'center'}}>
            <Col>
                <h3>Your Cart</h3>
                <p>Your cart is currently empty.</p>
                <Button variant="dark"
                    style={{padding: '8px 15px'}}
                    onClick={(e) => history.push(pathsRoutes.home)}
                >
                    <div className="btn--checkMenu">
                        <span style={{fontSize: '15px'}}>CHECK MENU</span>
                        <svg style={{width: '35px', marginLeft: '20px'}} aria-hidden="true" focusable="false" role="presentation" className="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#fff" fillRule="evenodd"></path></svg>
                    </div>
                </Button>
            </Col>
        </Row>
    )
}
export default memo(EmptyCart)