import React from 'react';
import PropTypes from 'prop-types';

const Response = (props) => {
    return (
      <div id={'response'} data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
          onChange = {(event) => props.recordResponse(event)}
          onKeyDown = {(event) => {
            if (event.key === "Enter") { 
              props.submitResponse();
              event.target.value = '';
            }
          }}
          // handle data change
          // handle when 'enter' is hit
        />
      </div>
    )
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}

export default Response;