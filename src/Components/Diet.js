import React, { useState } from "react";
import "../src/css/BMI.css";
function BMI() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [total, setTotal] = useState(height + weight);

  function calculateTotal(e) {
    // e.preventDefault();
    const jj = height / 100;

    const h = jj * jj;

    const tesla = weight / h;

    const res = Math.round(tesla * 10) / 10;
    setTotal(res);
  }
  console.log(total);

  return (
    <div className="bmi_main_container">
      <div className="bmi_main_container_1">
        {/* <form typeof="submit"> */}
        <div className="bmi_main_container_1_sub">
          <div className="form-group">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "normal",
                width: "100%",
              }}
            >
              Check your BMI
            </h1>
            <br></br>
            <label>Weight:</label>
            <input
              required
              type="number"
              id="weight"
              className="form-control"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>Height:</label>
            <input
              required="True"
              type="number"
              id="height"
              className="form-control"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>

          {/* <div className="form-group">
          <label>BMI Value:</label>
          <input
            type="text"
            name=""
            id="weight"
            className="form-control"
          ></input>
        </div> */}

          <div className="btn_main">
            <button type="submit" className="btn" onClick={calculateTotal}>
              Check BMI
            </button>
          </div>
        </div>

        {/* </form> */}
      </div>
      <div className="bmi_main_container_2">
        <div className="bmi_main_container_2_sub">
          <div className="data_txt">
            {isNaN(total) ? <div></div> : <h1>BMI:{total} kg/㎡</h1>}
          </div>
          <div>
            {total < 18.5 ? (
              <div className="data_bmi">
                <h1>Result:Underweight</h1>
                <h2>
                  Being underweight may weaken your immune system and put you at
                  risk of osteoporosis. Ask your doctor what you can do to
                  achieve a healthier weight or to address unexpected weight
                  loss. For better health:
                </h2>
                <h2>
                  Embrace healthy eating by choosing a variety of nutrient-rich
                  foods, including fruits, vegetables, whole grains, healthy
                  sources of protein such as fish or beans, and smaller amounts
                  of energy-dense foods, such as olive oil, nuts, and dried
                  fruits. Eat healthy snacks between meals, such as whole-grain
                  crackers and nuts, for example, to increase calorie intake.
                </h2>
                <h3>
                  Stay active. Aim for at least 150 minutes of moderate aerobic
                  activity or 75 minutes of vigorous aerobic activity a week, or
                  a combination of moderate and vigorous activity. Greater
                  amounts of exercise will provide greater health benefits. But
                  even small amounts of physical activity are helpful. Do
                  strength training exercises for all major muscle groups at
                  least two times a week. Aim to do a single set of each
                  exercise, using a weight or resistance level that can tire
                  your muscles after about 12 to 15 repetitions.
                </h3>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {total > 18.5 && total < 24.9 ? (
              <div className="data_bmi">
                <h1>Result:Normal</h1>
                <h2>
                  Congratulations! Your healthy weight is well worth the effort.
                  It reduces your risk of serious health conditions, such as
                  high blood pressure, heart disease, stroke, and diabetes. To
                  maintain a healthy weight:
                </h2>
                <h2>
                  Embrace healthy eating by choosing a variety of nutrient-rich
                  foods, including fruits, vegetables, whole grains, healthy
                  sources of protein such as fish or beans, and smaller amounts
                  of energy-dense foods, such as olive oil, nuts, and dried
                  fruits. Eat healthy snacks between meals, such as whole-grain
                  crackers and nuts, for example, to increase calorie intake.
                </h2>
                <br></br>
                <h3>
                  Stay active. Aim for at least 150 minutes of moderate aerobic
                  activity or 75 minutes of vigorous aerobic activity a week, or
                  a combination of moderate and vigorous activity. Greater
                  amounts of exercise will provide greater health benefits. But
                  even small amounts of physical activity are helpful. Do
                  strength training exercises for all major muscle groups at
                  least two times a week. Aim to do a single set of each
                  exercise, using a weight or resistance level that can tire
                  your muscles after about 12 to 15 repetitions.
                </h3>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {total > 24.9 ? (
              <div className="data_bmi">
                <h1>Result:Overweight</h1>
                <h2>
                  Consider the many benefits of a healthy weight – a reduced
                  risk of heart disease, stroke, and diabetes, increased energy,
                  and improved self-esteem. Talk to your doctor about the best
                  weight-loss approach for you.
                </h2>
                <h2>
                  Embrace healthy eating by choosing a variety of nutrient-rich
                  foods, including fruits, vegetables, and whole grains, and
                  small amounts of energy-dense foods, such as olive oil, nuts,
                  and dried fruits.
                </h2>
                <br></br>
                <h3>
                  Increase your activity level. Aim for at least 150 minutes of
                  moderate aerobic activity or 75 minutes of vigorous aerobic
                  activity a week, or a combination of moderate and vigorous
                  activity. Many adults will need to do more than the 150
                  minutes a week of moderate-intensity aerobic physical activity
                  to lose weight or keep it off. Do strength training exercises
                  for all major muscle groups at least two times a week. Aim to
                  do a single set of each exercise, using a weight or resistance
                  level that can tire your muscles after about 12 to 15
                  repetitions. Remember, even small amounts of activity provide
                  immediate benefits.
                </h3>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;
