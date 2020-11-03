import React from "react";
import { useForm } from "react-hook-form";

import formStyles from "./form.module.css";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={formStyles.container}>
        <div className={formStyles.formTitle}>
          <h3>Contact Us</h3>
          <img
            className={formStyles.formTitle_image}
            src="./assets/images/formTitle_border.png"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={formStyles.date}>
            <fieldset className={formStyles.date_container}>
              <label>
                <p className={formStyles.inputLabel}>Date</p>
                <input
                  className={formStyles.inputField}
                  type="text"
                  name="date"
                  ref={register({
                    required: true,
                    pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
                  })}
                />
                {errors.date && (
                  <span className={formStyles.errorMessage}>
                    Please ensure that the date is in the format DD/MM/YYYY
                  </span>
                )}
              </label>
            </fieldset>
          </div>
          <div className={formStyles.time}>
            <fieldset className={formStyles.time_container}>
              <label>
                <p className={formStyles.inputLabel}>Time</p>
                <select
                  className={formStyles.inputField}
                  type="text"
                  name="time"
                  ref={register({ required: true })}
                >
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
                {errors.time && (
                  <span className={formStyles.errorMessage}>
                    This is required
                  </span>
                )}
              </label>
            </fieldset>
          </div>
          <div className={formStyles.firstName}>
            <fieldset className={formStyles.firstName_container}>
              <label>
                <p className={formStyles.inputLabel}>First Name</p>
                <input
                  className={formStyles.inputField}
                  type="text"
                  name="firstName"
                  ref={register({ required: true })}
                />
                {errors.firstName && (
                  <span className={formStyles.errorMessage}>
                    This is required
                  </span>
                )}
              </label>
            </fieldset>
          </div>
          <div className={formStyles.lastName}>
            <fieldset className={formStyles.lastName_container}>
              <label>
                <p className={formStyles.inputLabel}>Last name</p>
                <input
                  className={formStyles.inputField}
                  type="text"
                  name="lastName"
                  ref={register({ required: true })}
                />
                {errors.lastName && (
                  <span className={formStyles.errorMessage}>
                    This is required
                  </span>
                )}
              </label>
            </fieldset>
          </div>
          <div className={formStyles.email}>
            <fieldset className={formStyles.email_container}>
              <p className={formStyles.inputLabel}>Email</p>
              <input
                className={formStyles.inputField}
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <span className={formStyles.errorMessage}>
                  Please enter a valid email address
                </span>
              )}
            </fieldset>
          </div>
          <div className={formStyles.phone}>
            <fieldset className={formStyles.phone_container}>
              <label>
                <p className={formStyles.inputLabel}>Phone</p>
                <input
                  className={formStyles.inputField}
                  type="text"
                  name="phone"
                  ref={register({
                    required: true,
                    pattern: /^\+(?:[0-9] ?){11,11}[0-9]$/i,
                  })}
                />
                {errors.phone && (
                  <span className={formStyles.errorMessage}>
                    Please enter a valid phone number with the country code eg.
                    +971551234567
                  </span>
                )}
              </label>
            </fieldset>
          </div>
          <div className={formStyles.comments}>
            <fieldset className={formStyles.comments_container}>
              <p className={formStyles.inputLabel}>Comments</p>
              <textarea
                className={formStyles.textArea}
                name="comments"
                ref={register({ required: true })}
              />
              {errors.comments && (
                <span className={formStyles.errorMessage}>
                  This is required
                </span>
              )}
            </fieldset>
          </div>
          <div className={formStyles.buttonContainer}>
            <button type="submit" className={formStyles.formButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
