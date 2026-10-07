/* eslint-disable @typescript-eslint/no-unused-vars */
import type { JSX } from "react";
import styles from "./SpaceTicketForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// Типы для данных формы
export interface SpaceTicketFormValues {
    planet: string;
    passportData: string;
    flightDate: string;
    cardNumber1: string;
    cardNumber2: string;
    cardNumber3: string;
    cardNumber4: string;
    code: string;
   
}

const validationSchema = Yup.object({
  planet: Yup.string().required("Select destination planet"),

  passportData: Yup.string()
  .matches(/^[a-zA-Z0-9\s-]+$/, "Только буквы, цифры, пробелы и дефисы")
  .min(5, "Паспортные данные слишком короткие")
  .required("Enter passport details"),

  flightDate: Yup.date()
  .required("Select flight date")
    .min(new Date(), "Дата полёта не может быть в прошлом"),

  cardNumber1: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .length(4, "Должно быть 4 цифры")
    .required("Обязательное поле"),

  cardNumber2: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .length(4, "Должно быть 4 цифры")
    .required("Обязательное поле"),

  cardNumber3: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .length(4, "Должно быть 4 цифры")
    .required("Обязательное поле"),

  cardNumber4: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .length(4, "Должно быть 4 цифры")
    .required("Обязательное поле"),

  code: Yup.string()
    .matches(/^\d+$/, "Только цифры")
    .length(3, "Должно быть 3 цифры")
    .required("Введите код доступа"),
});

    export default function SpaceTicketForm(): JSX.Element {
  const initialValues: SpaceTicketFormValues = {
    planet: "",
    passportData: "",
    flightDate: "",
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    code: "",
  };

  const handleSubmit = (values: SpaceTicketFormValues): void => {
    console.log("Отправленные данные космического билета:", values);
    alert(`🚀 Your flight to ${values.planet} has been successfully booked!`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Book your intergalactic flight ticket!</h2>
        <p className={styles.description}>
          Please enter passenger information and payment details
        </p>

        <img
          className={styles.Fry}
  src="https://cdn.mos.cms.futurecdn.net/RHiYURLf7bwv2TrTshqpic.jpg"
        />

        <Formik<SpaceTicketFormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            {/* Выбор планеты */}
            <div className={styles.formGroup}>
              <label htmlFor="planet" className={styles.label}>
                Destination planet
              </label>
              <Field
                as="select"
                id="planet"
                name="planet"
                className={styles.selectInput}
              >
                <option value="" disabled hidden>
                Select a planet
                </option>

                <option value="Saturn">Saturn</option>
                <option value="Venus">Venus</option>
                <option value="Mars">Mars</option>
                <option value="Uranus">Uranus</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Neptune">Neptune</option>
                

                </Field>
                <ErrorMessage
                name="planet"
                component="div"
                className={styles.error}
                />
            </div>

            {/* Паспортные данные */}
            <div className={styles.formGroup}>
              <label htmlFor="passportData" className={styles.label}>
                Passport Data
              </label>
              <Field
                id="passportData"
                name="passportData"
                type="text"
                placeholder="AB1234567"
                className={styles.selectInput}
              />
              <ErrorMessage
                name="passportData"
                component="div"
                className={styles.error}
              />
            </div>

            {/* 3. Дата полёта (календарь) */}
            <div className={styles.formGroup}>
              <label htmlFor="flightDate" className={styles.label}>
                Flight date
              </label>
              <Field
                id="flightDate"
                name="flightDate"
                type="date"
                className={styles.selectInput}
              />
              <ErrorMessage
                name="flightDate"
                component="div"
                className={styles.error}
              />
            </div>


            {/* Номер карты / Счёт для оплаты */}
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber1" className={styles.label}>
                Card / Account Number
              </label>
              <div className={styles.cardNumberGroup}>
                <Field
                  id="cardNumber1"
                  name="cardNumber1"
                  placeholder="0000"
                  maxLength="4"
                  className={styles.cardInput}
                />
                <span className={styles.dash}>-</span>
                <Field
                  id="cardNumber2"
                  name="cardNumber2"
                  placeholder="0000"
                  maxLength="4"
                  className={styles.cardInput}
                />
                <span className={styles.dash}>-</span>
                <Field
                  id="cardNumber3"
                  name="cardNumber3"
                  placeholder="0000"
                  maxLength="4"
                  className={styles.cardInput}
                />
                <span className={styles.dash}>-</span>
                <Field
                  id="cardNumber4"
                  name="cardNumber4"
                  placeholder="0000"
                  maxLength="4"
                  className={styles.cardInput}
                />
              </div>

              <div className={styles.cardErrors}>
                <ErrorMessage name="cardNumber1" component="div" className={styles.error} />
                <ErrorMessage name="cardNumber2" component="div" className={styles.error} />
                <ErrorMessage name="cardNumber3" component="div" className={styles.error} />
                <ErrorMessage name="cardNumber4" component="div" className={styles.error} />
              </div>
            </div>

            {/* Код доступа */}
            <div className={styles.formGroup}>
              <label htmlFor="code" className={styles.label}>
                Security Code
              </label>
              <Field
                id="code"
                name="code"
                placeholder="123"
                maxLength="3"
                className={styles.cvcInput}
              />
              <ErrorMessage name="code" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Book Flight 🚀
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
    
    

