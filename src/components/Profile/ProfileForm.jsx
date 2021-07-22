import React, { useContext, useRef } from 'react';

import { AuthContext } from '../../store/authContext';
import classes from './ProfileForm.module.css';
import { url } from '../../utils';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const { token } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(url('update'), {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      // assumption: Always succeeds!
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
