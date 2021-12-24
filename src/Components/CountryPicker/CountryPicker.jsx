import "./CountryPicker.scss";

import { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { countries } from "../../api";

function CountryPicker() {

useEffect(() => {

  const fetchCountries = async () => 
})

  return (
    <>
      <FormControl classname="form-control">
        <NativeSelect>
          <option value="global">Global</option>
        </NativeSelect>
      </FormControl>
    </>
  );
}

export default CountryPicker;
