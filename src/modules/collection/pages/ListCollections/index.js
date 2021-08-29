import { isEmpty } from 'lodash';
import React, { memo } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useSelector } from "react-redux";
import {RESTFUL_URL} from '../../../../helper/consts'
import NoImage from '../../../../assets/images/NoImage.png'
import paths from '../../../../helper/pathRoutes';
import { useHistory } from 'react-router-dom';


function ListCollections () {
  const history = useHistory();
  const { collections } = useSelector(
    state => state.collection
  );
  const handleRedirectCollection = (slugs) => {
    history.push(`${paths.collection}/${slugs}`)
  }
  return (
    <div className="collections">
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Row>
          <Col md="12" style={{ textAlign: "center" }}>
            <h3>Collections</h3>
          </Col>
        </Row>
        <Row className="list-collection">
            {
              !isEmpty(collections) && collections.map((c, idx) => {
                const imageCollection = !isEmpty(c.products) ? `${RESTFUL_URL}${c.products[0]['productImage'][0]['url']}` : NoImage
                return (
                  <Col md="6" key={idx}>
                    <div 
                      className="collection-item"
                      onClick={() => handleRedirectCollection(c.slugs)}
                    >
                      <img className="img-listCollection" src={imageCollection} alt={''}/>
                      <h3>{c.collectionName}</h3>
                    </div>
                  </Col>
                )
              })
            }
        </Row>
      </Container>
    </div>
  )
}

export default memo(ListCollections)