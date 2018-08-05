import React from 'react';
import { withFormik } from 'formik';
import { addTweet } from '../actions';
import * as Yup from 'yup';
import { connect } from 'react-redux';

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="hashtag" style={{ display: 'block' }}>
        Hashtag
      </label>
      <input
        id="hashtag"
        placeholder="Enter hashtag"
        type="text"
        value={values.hashtag}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus={true}
        className={
          errors.email && touched.email ? 'text-input error' : 'text-input'
        }        
      />
      {errors.email &&
        touched.email && <div className="input-feedback">{errors.email}</div>}

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const TextInput = withFormik({
  mapPropsToValues: () => ({ hashtag: '' }),
  // validationSchema: Yup.object().shape({
  //   email: Yup.string()
  //     .email('Invalid email address')
  //     .required('Email is required!')
  // }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    let baseUrl = 'http://188.166.35.26/search/';
    let url = `${baseUrl}${values.hashtag}`;
    var request = new Request(url, {
      method: 'GET',
      mode: 'cors',
      // data: 'The sky is green',
      // redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
    setSubmitting(false);
    resetForm();
    fetch(request)
      .then(response => {
        let res = response.json();
        return res;
      })
      .then(tweet => {
        console.log(tweet);
        props.dispatch(addTweet(tweet));

      });
  },
  displayName: 'BasicForm' // helps with React DevTools
})(MyInnerForm);

export default connect(
  null,
  null
)(TextInput);
