import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

const classes = theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50,
    label: '5',
  },
  {
    value: 60,
    label: '6',
  },
  {
    value: 70,
    label: '7',
  },
  {
    value: 80,
    label: '8',
  },
  {
    value: 90,
    label: '9',
  },
  {
    value: 100,
    label: '10',
  },
];

class DiscreteSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      marks : marks
    };

  }
  render() {
    const { classes, score, qno } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={marks}
          value={score}
          onChange={(event, val) => {
            this.props.changeScore(qno, val)
          }
          }
        />
      </div>
    );
  }
}
export default withStyles(classes, { withTheme: true })(DiscreteSlider)