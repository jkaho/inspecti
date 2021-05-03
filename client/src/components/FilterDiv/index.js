import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  unselected: {
    background: "rgb(250, 225, 250)",
    color: "black",
    padding: 5,
    "&:hover": {
      background: "rgb(250, 225, 250)",
    },
    fontSize: 12,
    width: 40
  },
  selected: {
    backgroundColor: "rgb(102, 4, 148)!important",
    color: "white!important",
    padding: 5,
    fontSize: 12,
    width: 40
  },
  formControl: {
    minWidth: 120,
    marginLeft: 10
  },
  selectEmpty: {
    color: "rgb(102, 4, 148)"
  },
  toggleBtn: {
    verticalAlign: "top",
  },
  span: {
    verticalAlign: "top"
  }
}));

function MinMaxToggle() {
  const classes = useStyles();
  const [minMax, setMinMax] = React.useState("minimum");

  const handleMinMax = (event, newMinMax) => {
    setMinMax(newMinMax);
  };

  return (
    <ToggleButtonGroup
      value={minMax}
      className={classes.toggleBtn}
      onChange={handleMinMax}
      exclusive
      aria-label="minimum or maximum"
    >
      <ToggleButton 
        value="minimum" 
        aria-label="minimum"
        className={minMax === "minimum" ? classes.selected : classes.unselected}
      >
        Min
      </ToggleButton>
      <ToggleButton 
        value="maximum" 
        aria-label="maximum"
        className={minMax === "maximum" ? classes.selected : classes.unselected}
      >
        Max
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

function CategorySelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    category: '',
  });

  const handleChange = (event) => {
    const category = event.target.category;
    setState({
      ...state,
      [category]: event.target.value,
    });
  };

  return (
    <div className="category-select-div">
      <NativeSelect
        id={props.selectId}
        className={classes.bedWidth}
        value={state.category}
        category={props.category}
        onChange={handleChange}
        inputProps={{ 'aria-label': props.category }}
      >
        <option value="" disabled>
          {props.category}
        </option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </NativeSelect>
    </div>
  );
};

export default function FilterDiv() {
  const classes = useStyles();
  
  return (
    <div className="filter-div">
      <MinMaxToggle />
      <CategorySelect
        selectId="bed-select"
        category="Bed"
        options={[
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
        ]}
      />
      <CategorySelect
        selectId="bath-select"
        category="Bath"
        options={[
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
        ]}
      />
      <CategorySelect
        selectId="car-select"
        category="Car"
        options={[
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
        ]}
      />
      <CategorySelect
        selectId="price-select"
        category="Price"
        options={[
          { value: 500000, text: "$500k" },
          { value: 750000, text: "$750k" },
          { value: 1000000, text: "$1.0m" },
          { value: 1500000, text: "$1.5m" },
          { value: 2000000, text: "$2.0m" },
          { value: 2500000, text: "$2.5m" },
          { value: 3000000, text: "$3.0m" },
          { value: 4000000, text: "$4.0m" },
          { value: 5000000, text: "$5.0m" },
        ]}
      />
      <CategorySelect
        selectId="size-select"
        category="Size"
        options={[
          { value: 100, text: "100m²" },
          { value: 150, text: "150m²" },
          { value: 200, text: "200m²" },
          { value: 250, text: "250m²" },
          { value: 300, text: "300m²" },
          { value: 350, text: "350m²" },
          { value: 400, text: "400m²" },
          { value: 500, text: "500m²" },
          { value: 600, text: "600m²" },
          { value: 700, text: "700m²" },
          { value: 800, text: "800m²" },
          { value: 900, text: "900m²" },
          { value: 1000, text: "1000m²" },
        ]}
      />
      <span className={classes.span}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <CategorySelect
        selectId="type-select"
        category="Type"
        options={[
          { value: "House", text: "House" },
          { value: "Apartment", text: "Apartment" },
          { value: "Townhouse", text: "Townhouse" },
          { value: "Villa", text: "Villa" },
          { value: "Land", text: "Land" },
        ]}
      />
    </div>
  );
};