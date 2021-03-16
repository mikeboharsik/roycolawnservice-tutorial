import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Contact = props => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      Our regular office hours are:

      <ul>
        <li>Monday: 10am to 5pm</li>
        <li>Tuesday: 9am to 5pm</li>
        <li>Wednesday: 9am to 5pm</li>
        <li>Thursday: 9am to 5pm</li>
        <li>Friday: 10am to 5pm</li>
        <li>Saturday: 12pm to 3pm</li>
        <li>Sunday: Closed</li>
      </ul>

      <br />

      Please bear in mind that COVID-19 may affect these times. We apologize for any inconvenience and will do our best to help you as soon as we possibly can.

      <br /><br />

      We can be reached at the following places:

      <ul>
        <li>
          Email address: <a href="mailto:contact@roycolawnservice.com">contact@roycolawnservice.com</a>
        </li>
        <li>
          Corporate phone number: <a href="tel:(781) 832-0109">(781) 832-0109</a>
        </li>
        <li>Corporate office: <a href="https://www.google.com/maps/place/John+Hancock+Tower,+120+St+James+Ave+Floor+14,+Boston,+MA+02116" target="_blank" rel="noopener noreferrer">120 St. James Ave. Floor 14, Boston, MA 02116</a></li>
        <li>Facebook (coming soon)</li>
        <li>Twitter (coming soon)</li>
      </ul>

      <br /><br />

      <Link to={'/quote'} style={{ display: 'flex', justifyContent: 'center' }}>Would you like a quote? Click here to fill out our form!</Link>

    </div>
  )
};

export default Contact;