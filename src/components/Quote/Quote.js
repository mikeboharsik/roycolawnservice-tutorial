/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink as Link } from 'react-router-dom';
import './Quote.css';

const BackButton = props => (
  <div>
    <br />
    <Link to={'/contact'}>
      Click here to return to the main site
    </Link>
  </div>
);

const Prompt = props => {
  const { existingQuote } = props;

  let message;

  if (existingQuote === null) {
    message = `We don't want to harvest your data. We only ask for the minimal amount of information required to get back to you. You decide which details you want us to know about.`;
  } else {
    message = `Thank you for submitting a quote! We will get back to you as soon as we can.`
  }

  return <span>{message}</span>
};

const Form = props => {
  const { existingQuote, handleSubmit, onSubmit, register } = props;

  return (
    <div id="quote-form-container" style={{ width: '100%', height: '100%' }}>
      <Prompt existingQuote={existingQuote} />

      <br /><br />

      <fieldset id="quote-form" disabled={existingQuote !== null}>
        <form id="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input defaultValue={existingQuote?.name} ref={register} name="name" className="quote-form-input" required />

            <label>Email Address</label>
            <input defaultValue={existingQuote?.email} type="email" ref={register} name="email" className="quote-form-input" required />

            <label>Details</label>
            <textarea defaultValue={existingQuote?.details} ref={register} name="details" className="quote-form-input" required />

            <br />

            <button>Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

const LoadingRing = props => (
  <div className="lds-ring" style={{ height: '100%' }}>
    <div /><div /><div /><div />
  </div>
);

const SubmissionConfirmation = props => (
  <div style={{ height: '100%', textAlign: 'center' }}>
    Thank you! Your quote request has been submitted.

    <br /><br />

    One of our representatives will be in touch after we review your request.

    <BackButton />
  </div>
);

const SubmissionError = props => (
  <div style={{ height: '100%', textAlign: 'center' }}>
    An error occurred.
    
    <br /><br />
    
    Please <a href="" target="_self" onClick={e => { e.preventDefault(); props.setIsSubmitting?.(null); }}>try again</a>, though bear in mind that if you have a submission in progress then the system will prevent you from creating another one.
    
    <BackButton />
  </div>
);

const Quote = props => {
  const { register, handleSubmit } = useForm();

  const [ isLoadingQuote, setIsLoadingQuote ] = useState(null);
  const [ existingQuote, setExistingQuote ] = useState(null);
  const [ isSubmitting, setIsSubmitting ] = useState(null);
  const [ submissionError, setSubmissionError ] = useState(null);

  useEffect(() => {
    if (isLoadingQuote === null) {
      async function getData() {
        setIsLoadingQuote(true);
        try {
          const quote = await fetch('https://www.roycolawnservice.com/quotes/current');
          setExistingQuote(await quote.json());
        } catch {
          
        }
        setIsLoadingQuote(false);
      }
      getData();
    }
  }, [isLoadingQuote]);

  useEffect(() => () => {
    setIsLoadingQuote(null);
    setExistingQuote(null);
    setIsSubmitting(null);
    setSubmissionError(null);
  }, []);

  const onSubmit = async data => {
    const proceed = window.confirm('Only one quote request may be submitted at a time. Are you sure you have entered all desired information?');
    if (proceed) {
      setSubmissionError(null);
      setIsSubmitting(true);
      
      const uri = `https://www.roycolawnservice.com/quotes`;

      let response;
      try {
        response = await fetch(uri, {
          method: 'POST',
          body: JSON.stringify(data),
        });
      } catch (e) {
        setSubmissionError(`An unexpected error occurred: ${e.message}`);
      } finally {
        setIsSubmitting(false);

        if (response?.ok === false) {
          setSubmissionError(<SubmissionError isSubmitting={isSubmitting} />);
        }
      }
    }
  };

  if (isSubmitting === true || isLoadingQuote === true) {
    return <LoadingRing />
  } else if (isSubmitting === false) {
    return submissionError ?? <SubmissionConfirmation />;
  } else {
    return <Form existingQuote={existingQuote} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />;
  }
};

export default Quote;