import React from "react";

const FormWidgets = () => {
  return (
    <>
      <h1>Form Widgets</h1>
      <form>
        <p>Search field</p>
        <input type="search" id="search" name="search"></input>

        <p>Phone number field</p>
        {/* NOTE: A digital keypad will be presented that is more suitable for entering number */}
        <input type="tel" id="tel" name="tel" />

        <p>Multi-line text fields</p>
        <textarea cols={10} rows={10} wrap={"hard"}></textarea>

        <p>Select box</p>
        {/* NOTE: if an <option> is set with a value attribute, the attribute's value will be sent when the form is submitted */}
        <select id="simple" name="simple">
          <optgroup label="fruits">
            <option>Banana</option>
            <option selected>Cherry</option>
            <option>Lemon</option>
          </optgroup>
          <optgroup label="vegetables">
            <option>Carrot</option>
            <option>Eggplant</option>
            <option>Potato</option>
          </optgroup>
        </select>

        <p>Multiple choice select box</p>
        <select id="multi" name="multi" multiple>
          <option>Banana</option>
          <option>Cherry</option>
          <option>Lemon</option>
        </select>

        <p>Autocomplete input box</p>
        <label htmlFor="myFruit">What's your favorite fruit?</label>
        <input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
        <datalist id="mySuggestion">
          <option>Apple</option>
          <option>Banana</option>
          <option>Blackberry</option>
          <option>Blueberry</option>
          <option>Lemon</option>
          <option>Lychee</option>
          <option>Peach</option>
          <option>Pear</option>
        </datalist>

        {/* NOTE: For checkable items widgets, the value is sent during form submission only if they are checked */}
        <p>Check box</p>
        <input
          type="checkbox"
          id="carrots"
          name="carrots"
          value="carrots"
          checked
        ></input>

        <p>Radio button</p>
        {/* NOTE: if the radio buttons share the same value for their name attribute, they are considered in the same group of button */}
        <fieldset>
          <legend>What is your favorite meal?</legend>
          <ul>
            <li>
              <label htmlFor="soup">Soup</label>
              <input type="radio" id="soup" name="meal" value="soup" checked />
            </li>
            <li>
              <label htmlFor="curry">Curry</label>
              <input type="radio" id="curry" name="meal" value="curry" />
            </li>
            <li>
              <label htmlFor="pizza">Pizza</label>
              <input type="radio" id="pizza" name="meal" value="pizza" />
            </li>
          </ul>
        </fieldset>

        <p>Buttons</p>
        <button type="submit">
          This is a <br />
          <strong>submit button</strong>
        </button>
        <input type="submit" value="This is a submit button"></input>
        <br />

        <button type="reset">
          This is a <br />
          <strong>reset button</strong>
        </button>
        <input type="reset" value="This is a submit button"></input>
        <br />

        <button type="button">
          This is a <br />
          <strong>annoymous button</strong>
        </button>
        <input type="button" value="This is a submit button"></input>

        <p>Numbers</p>
        <input
          type="number"
          name="age"
          id="age"
          min="1"
          max="10"
          step="2"
        ></input>

        <p>Sliders</p>
        <input
          type="range"
          name="beans"
          id="beans"
          min="0"
          max="500"
          step="10"
        ></input>

        <p>File picker</p>
        {/* NOTE: adding capture to the accept attribute allows the file picker to access photos directly from device's camera */}
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*;capture=camera"
          multiple
        ></input>

        <p>Progress bar</p>
        <progress max="100" value="75">
          75/100
        </progress>

        <p>Meter</p>
        <meter min="0" max="100" value="75" low={33} high={66} optimum={50}>
          75
        </meter>
      </form>
    </>
  );
};

export default FormWidgets;
