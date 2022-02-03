import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { Row, Col } from 'reactstrap'
import { apiAction } from '../actions/api'
import { fetchData, generateInitialValues, handleSubmit } from './utils'

const mapStateToProps = (state) => {
  return { 
    formValues: state.api.formValues
  }
}

const BoatForm = ({formValues, apiAction}) => {

  useEffect(() => { fetchData(apiAction) }, [])

  return (
    <div className="form-wrapper">
      <Formik
        enableReinitialize={true}
        initialValues={generateInitialValues(formValues)}
        onSubmit={(values) => handleSubmit(values, apiAction)}
        validateOnBlur={true}>
          {() => { return (
            <Form>
              <h1>Boat Form</h1>
              <Row>
                <Col xs={4}>
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name"/>
                </Col>
                <Col xs={4}>
                  <label htmlFor="length">Length (m)</label>
                  <Field id="length" name="length"/>
                </Col>
                <Col xs={4}>
                  <label htmlFor="width">Width (m)</label>
                  <Field id="width" name="width"/>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <label htmlFor="height">Height (m)</label>
                  <Field id="height" name="height"/>
                </Col>
                <Col xs={4}>
                  <label htmlFor="draft">Draft (m)</label>
                  <Field id="draft" name="draft"/>
                </Col>
                <Col xs={4}>
                  <label htmlFor="status">Status</label>
                  <Field as="select" id="status" name="status">
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </Field>
                </Col>
              </Row>
              <Row>
                <button type="submit">Submit</button>
              </Row>
            </Form>
          )
        }}
      </Formik> 
    </div>
  )
}

export default connect(mapStateToProps, {apiAction})(BoatForm)