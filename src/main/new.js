import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  paper: {
    width: '400px',
    margin: 'auto',
    padding: '15px',
    marginTop: '35px'
  }
});


class NewPart extends Component {
  constructor(props){
    super(props)
    this.state ={
      part: {}
    }
  }


  handleInputChange = name => event => {
      this.setState({
        [name]: event.target.value
      })
  }

  createPart = () => {
    this.props.handleClose()
    this.props.createPart(this.state).then((part) => (
      this.props.addPart(part)
    ))
  }


  render() {
    const { classes, open } = this.props
    return(
      <Modal open={open} onClose={this.props.handleClose}>
        <Paper classes={{root: classes.paper}}>
          <Typography variant="title"> Create New Part </Typography>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            onChange={this.handleInputChange('name')}
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            margin="normal"
            onChange={this.handleInputChange('description')}
            fullWidth
          />
          <TextField
            id="partNumber"
            label="Part Number"
            margin="normal"
            onChange={this.handleInputChange('partNumber')}
            fullWidth
          />
          <TextField
            id="cost"
            label="Cost"
            margin="normal"
            onChange={this.handleInputChange('cost')}
            fullWidth
          />
          <TextField
            id="quantity"
            label="Quantity"
            margin="normal"
            type="number"
            onChange={this.handleInputChange('inStock')}
            fullWidth
          />
          <TextField
            id="img"
            label="Image"
            optional
            margin="normal"
            onChange={this.handleInputChange('image')}
            fullWidth
          />
          <Button variant="outlined" color="primary" onClick={this.createPart}>
          Save
          </Button>
        </Paper>
      </Modal>

    )
  }
}

export default withStyles(styles)(NewPart);
