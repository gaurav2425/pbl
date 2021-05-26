import React, { useState } from "react";
import "../css/Exercise.css";

function Exercise() {
  const [valinput, setValInput] = useState();
  const [result, setResult] = useState();
  console.log(valinput);

  function calculateTotal(e) {
    setResult(valinput);
  }

  const bmi = {
    marginTop: "20px",
  };
  const input = {
    width: "50%",
    outline: "none",
    paddingTop: "10px",
    fontSize: "20px",
    border: "none",
    borderBottom: "1px solid black",
  };
  const label = {
    fontSize: "20px",
  };

  return (
    <div style={bmi}>
      <label style={label}>BMI: </label>
      <input
        placeholder="Enter Your BMI"
        style={input}
        type="number"
        value={valinput}
        onChange={(e) => setValInput(e.target.value)}
      ></input>
      <button className="btn_exercise" type="submit" onClick={calculateTotal}>
        Show Exercises
      </button>
      <div>{isNaN(result) ? <h1></h1> : <h1></h1>}</div>
      <div>
        {result < 18.5 ? (
          <div className="exercises_main">
            <div className="exercises">
              <h1>Pushups</h1>
              <h2>
                Pushups are simple and help build muscle in your arms and
                shoulders. To do a pushup:
              </h2>
              <li>Lie face down on the ground</li>
              <li>
                Put your hands on the ground, palms flat, with your arms out at
                your sides and your hands shoulder-width apart
              </li>
              <li>
                Slowly push your body up until your arms are fully extended.
                Keep your back and legs straight so that your body makes a
                straight line
              </li>
              <li>
                Slowly lower yourself back down until your nose nearly touches
                the floor
              </li>
              <li>Repeat as many times as you feel comfortable</li>
            </div>

            <div className="exercises">
              <h1>Pullups</h1>
              <h2>
                You’ll need some kind of pullup bar or sturdy cylindrical object
                to do pullups. Otherwise, this exercise is a simple way to build
                arm and shoulder muscles
              </h2>
              <li>
                Grip the pullup bar with both hands. Your palms should face away
                from you. Keep your arms shoulder-width apart.
              </li>
              <li>
                Pull yourself up enough to hang off the bar so that your feet
                aren’t touching the ground and your arms are straight.
              </li>
              <li>
                Continue to pull yourself up until your chin is above the bar
              </li>
              <li>
                Slowly lower yourself down so that your arms are straight again
              </li>
              <li>Repeat as many times as you want.</li>
            </div>

            <div className="exercises">
              <h1>Squates</h1>
              <h2>
                This exercise helps build muscle in your butt and legs,
                especially your quadriceps femoris (quads) muscles.
              </h2>
              <li>
                Put your hands on your hips and flex your abdominal muscles.
              </li>
              <li>
                Begin lowering yourself down using only your legs, as if you’re
                about to sit down, and get into a seated position until your
                thighs are parallel to the ground. Keep your upper body as still
                as possible.
              </li>
              <li>Raise yourself back up to your original position.</li>
              <li>Repeat as many times as you want.</li>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {result > 18.5 && result < 24.9 ? (
          <div className="exercises_main">
            <div className="exercises">
              <h1>1.Pushups</h1>
              <h3>
                Drop and give me 20! Pushups are one of the most basic, yet
                effective, body weight moves you can perform because of the
                number of muscles that are recruited to perform them
              </h3>
            </div>

            <div className="exercises">
              <h1>2.Lunges</h1>
              <h3>
                Challenging your balance is an essential part of a well-rounded
                exercise routine. Lunges do just that, promoting functional
                movement, while also increasing strength in your legs and glutes
              </h3>
            </div>

            <div className="exercises">
              <h1>3. Squats</h1>
              <h3>
                Squats increase lower body and core strength, as well as
                flexibility in your lower back and hips. Because they engage
                some of the largest muscles in the body, they also pack a major
                punch in terms of calories burned
              </h3>
            </div>

            <div className="exercises">
              <h1>4. Standing overhead dumbbell presses</h1>
              <h3>
                Compound exercises, which utilize multiple joints and muscles,
                are perfect for busy bees as they work several parts of your
                body at once. A standing overhead press isn’t only one of the
                best exercises you can do for your shoulders, but it also
                engages your upper back and core.
              </h3>
            </div>

            <div className="exercises">
              <h1>5. Dumbbell rows</h1>
              <h3>
                Not only will these make your back look killer in that dress,
                but dumbbell rows are also another compound exercise that
                strengthens multiple muscles in your upper body. Choose a
                moderate-weight dumbbell and ensure that you’re squeezing at the
                top of the movement.
              </h3>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {result > 24.9 ? (
          <div className="exercises_main">
            <div className="exercises">
              <h1>1. Walking</h1>
              <h3>
                It should come as no surprise that walking is one of the best
                exercises to focus on if you're looking to improve your fitness
                and lose weight. While the benefits of walking vary depending on
                sex and weight, walking 1 mile can burn approximately 100
                calories.
              </h3>
            </div>

            <div className="exercises">
              <h1>2. Modified Push-Ups</h1>
              <h3>
                Push-ups are one of the top exercises you can use to get in
                shape when you're overweight or obese. Don't worry; it doesn't
                have to be as bad as you think! While it can be difficult to do
                push-ups if you're overweight, you can modify the exercise to
                make it easier. There are several ways you can do this if a
                standard push-up is too difficult.
              </h3>
            </div>

            <div className="exercises">
              <h1>3. Riding a Stationary Bike</h1>
              <h3>
                In addition to walking, riding a stationary bike is a great
                exercise you can use to improve your body and get your heart
                rate up. Stationary bikes can come with backrests, providing
                additional support and a more comfortable experience.
              </h3>
            </div>

            <div className="exercises">
              <h1>4. Side Leg Lifts</h1>
              <h3>
                Leg lifts are a great exercise for working out your lower body,
                and there are several types of leg lifts you can try. Side leg
                lifts, or side-lying hip abduction exercises, are one of the
                best types you may want to give a shot.
              </h3>
            </div>

            <div className="exercises">
              <h1>5. Bridges</h1>
              <h3>
                Performing a glute bridge exercise can also be a good exercise
                to try when improving your personal fitness as a beginner.
                Performing bridges will strengthen your core and build your
                lower back and gluteus muscles. For this exercise, you'll need
                to get down on the floor, laying on your back with your knees
                bent. Then, you'll need to lift up your hips off of the floor
                and then slowly back down.
              </h3>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Exercise;
