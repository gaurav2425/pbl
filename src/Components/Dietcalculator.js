import React, { useState } from "react";
function Dietcalculator() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [total, setTotal] = useState(height + weight);

  function calculateTotal(e) {
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
        <div className="bmi_main_container_1_sub">
          <div className="form-group">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "normal",
                width: "100%",
                fontSize: "22px",
              }}
            >
              Check Suitable Diet For You
            </h1>
            <br></br>

            <label>Age:</label>
            <input
              style={{ marginLeft: "30px" }}
              required="True"
              type="number"
              id="age"
              className="form-control"
              placeholder="Enter Your Age"
              // value={height}
            ></input>
          </div>

          <div className="form-group">
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
              Check Diet
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
                <h2>Helathy Diet</h2>
                <li>
                  Eating at least 5 portions of a variety of fruit and
                  vegetables every day.
                </li>
                <li>
                  Basing meals on potatoes, bread, rice, pasta or other starchy
                  carbohydrates. Choose wholegrain where possible.
                </li>
                <li>
                  Having some dairy or dairy alternatives (such as soya drinks
                  and yoghurts). Have whole (full-fat) milk until you build your
                  weight back up.
                </li>
                <li>
                  Eating some beans, pulses, fish, eggs, meat and other protein.
                  Aim for 2 portions of fish every week – 1 of which should be
                  oily, such as salmon or mackerel.
                </li>
                <li>
                  Choosing unsaturated oils and spreads, such as sunflower or
                  rapeseed, and eating them in small amounts.
                </li>
                <li>
                  Drinking plenty of fluids. The government recommends 6 to 8
                  glasses a day. But try not to have drinks just before meals to
                  avoid feeling too full to eat.
                </li>
                <h1>Underweight older people</h1>
                <li>
                  Eating less and unintentional weight loss can affect older
                  people. But getting older does not mean that losing weight is
                  inevitable. Find out what to do if you're over 60 and
                  underweight.
                </li>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {total > 18.5 && total < 24.9 ? (
              <div className="data_bmi">
                <h1>Result:Normal</h1>

                <h2>Helathy Diet</h2>

                <h1>Fruit</h1>
                <h3>
                  Fresh, frozen, or canned fruits are great choices. Try fruits
                  beyond apples and bananas such as mango, pineapple or kiwi
                  fruit. When fresh fruit is not in season, try a frozen,
                  canned, or dried variety. Be aware that dried and canned fruit
                  may contain added sugars or syrups. Choose canned varieties of
                  fruit packed in water or in its own juice.
                </h3>
                <br></br>
                <h1>Vegetables</h1>
                <h3>
                  Add variety to grilled or steamed vegetables with an herb such
                  as rosemary. You can also sauté (panfry) vegetables in a
                  non-stick pan with a small amount of cooking spray. Or try
                  frozen or canned vegetables for a quick side dish—just
                  microwave and serve. Look for canned vegetables without added
                  salt, butter, or cream sauces. For variety, try a new
                  vegetable each week.
                </h3>
                <br></br>
                <h1>Calcium-rich foods</h1>
                <h3>
                  In addition to fat-free and low-fat milk, consider low-fat and
                  fat-free yogurts without added sugars. These come in a variety
                  of flavors and can be a great dessert substitute.
                </h3>

                <br></br>
                <h1>Meats</h1>
                <h3>
                  If your favorite recipe calls for frying fish or breaded
                  chicken, try healthier variations by baking or grilling. Maybe
                  even try dry beans in place of meats. Ask friends and search
                  the internet and magazines for recipes with fewer calories ―
                  you might be surprised to find you have a new favorite dish!
                </h3>

                <br></br>
                <h1>Comfort Foods</h1>
                <h3>
                  Healthy eating is all about balance. You can enjoy your
                  favorite foods, even if they are high in calories, fat or
                  added sugars. The key is eating them only once in a while and
                  balancing them with healthier foods and more physical
                  activity.
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
                <h2>Diet:</h2>
                <h3>
                  There's no single rule that applies to everyone, but to lose
                  weight at a safe and sustainable rate of 0.5 to 1kg a week,
                  most people are advised to reduce their energy intake by 600
                  calories a day. For most men, this will mean consuming no more
                  than 1,900 calories a day, and for most women, no more than
                  1,400 calories a day. The best way to achieve this is to swap
                  unhealthy and high-energy food choices – such as fast food,
                  processed food and sugary drinks (including alcohol) – for
                  healthier choices.
                </h3>
                <br></br>
                <h3>A healthy diet should consist of:</h3>
                <li>plenty of fruit and vegetables</li>
                <li>
                  plenty of potatoes, bread, rice, pasta and other starchy foods
                  (ideally you should choose wholegrain varieties)
                </li>

                <li>some milk and dairy foods</li>
                <li>
                  some meat, fish, eggs, beans and other non-dairy sources of
                  protein
                </li>
                <li>
                  just small amounts of food and drinks that are high in fat and
                  sugar
                </li>
                <br></br>
                <h1>Very low calorie diets</h1>
                <h3>
                  A very low calorie diet (VLCD) is where you consume less than
                  800 calories a day. These diets can lead to rapid weight loss,
                  but they are not a suitable or safe method for everyone, and
                  they are not routinely recommended for managing obesity. VLCDs
                  are usually only recommended if you have an obesity-related
                  complication that would benefit from rapid weight loss. VLCDs
                  should not usually be followed for longer than 12 weeks at a
                  time, and they should only be used under the supervision of a
                  suitably qualified healthcare professional. Speak to your GP
                  first if you're considering this type of diet.
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

export default Dietcalculator;
