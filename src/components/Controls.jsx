import React from "react";

function Controls(props) {
  return (
    <div className='Controls-container'>
      <div className='Controls-version'>
        <label htmlFor="version-select">Version:</label>
        <select name="version-select" id="version-select">
          <option value="red-blue">Red / Blue / Yellow</option>
          <option value="gold-silver">Gold / Silver / Crystal</option>
          <option value="ruby-sapphire">Ruby / Sapphire / Emerald / FireRed / LeafGreen</option>
          <optgroup label="Gen 4">
            <option value="diamond-pearl">Diamond / Pearl</option>
            <option value="platinum">Platinum / HeartGold / SoulSilver</option>
          </optgroup>
          <optgroup label="Gen 5">
            <option value="black-white">Black / White</option>
            <option value="black-2-white-2">Black 2 / White 2</option>
          </optgroup>
          <optgroup label="Gen 6">
            <option value="x-y">X / Y</option>
            <option value="omega-ruby-alpha-sapphire">Omega Ruby / Alpha Sapphire</option>
          </optgroup>
          <optgroup label="Gen 7">
            <option value="sun-moon">Sun / Moon</option>
            <option value="ultra-sun-ultra-moon">Ultra Sun / Ultra Moon</option>
          </optgroup>
        </select>
      </div>
      <div className="Controls-evolved">
        <input type="checkbox" name="force-fully-evolved" id="force-fully-evolved" />
        <label htmlFor="force-fully-evolved">Show only fully evolved Pokemon</label>
      </div>
      <div className='Controls-types'>
        <div className="type-button">
          <input type="checkbox" name="type-normal" id="type-normal" value="0" />
          <label htmlFor="type-normal">Normal</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-fighting" id="type-fighting" value="1" />
          <label htmlFor="type-fighting">Fighting</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-flying" id="type-flying" value="2" />
          <label htmlFor="type-flying">Flying</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-poison" id="type-poison" value="3" />
          <label htmlFor="type-poison">Poison</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-ground" id="type-ground" value="4" />
          <label htmlFor="type-ground">Ground</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-rock" id="type-rock" value="5" />
          <label htmlFor="type-rock">Rock</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-bug" id="type-bug" value="6" />
          <label htmlFor="type-bug">Bug</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-ghost" id="type-ghost" value="7" />
          <label htmlFor="type-ghost">Ghost</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-steel" id="type-steel" value="8" />
          <label htmlFor="type-steel">Steel</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-fire" id="type-fire" value="9" />
          <label htmlFor="type-fire">Fire</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-water" id="type-water" value="10" />
          <label htmlFor="type-water">Water</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-grass" id="type-grass" value="11" />
          <label htmlFor="type-grass">Grass</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-electric" id="type-electric" value="12" />
          <label htmlFor="type-electric">Electric</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-psychic" id="type-psychic" value="13" />
          <label htmlFor="type-psychic">Psychic</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-ice" id="type-ice" value="14" />
          <label htmlFor="type-ice">Ice</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-dragon" id="type-dragon" value="15" />
          <label htmlFor="type-dragon">Dragon</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-dark" id="type-dark" value="16" />
          <label htmlFor="type-dark">Dark</label>
        </div>
        <div className="type-button">
          <input type="checkbox" name="type-fairy" id="type-fairy" value="17" />
          <label htmlFor="type-fairy">Fairy</label>
        </div>
      </div>
    </div>
  );
}

export default Controls;
