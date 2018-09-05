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


class EditPart extends Component {
  constructor(props){
    super(props)
    this.state= {
      part: {name: '', description: '', inStock: '' }
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.part !== prevProps.part){
    this.setState({
      part: this.props.part
    })}
  }

  handleInputChange = name => event => {
    const value = event.target.value;
      console.log(this.state.part)

      this.setState((prevState) => {
        return ({
          part: {...prevState.part, [name]: value}
        });
      })
  }

  updatePart = (id, part) => {
    this.props.handleClose()

    this.props.editPart(id, part).then((part) => (
      this.props.updatePart(this.props.index, part)
    ))
  }


  render() {
    console.log(this.props.part)
    const { classes, open } = this.props

    return(
      <Modal open={open} onClose={this.props.handleClose}>
        <Paper classes={{root: classes.paper}}>
          <Typography variant="title"> Edit Part </Typography>
          <TextField
            id="name"
            label="Name"
            multiline
            margin="normal"
            onChange={this.handleInputChange('name')}
            value={this.state.part.name}
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            multiline
            margin="normal"
            onChange={this.handleInputChange('description')}
            value={this.state.part.description}
            fullWidth
          />
      <TextField
            id="partNumber"
            label="Part Number"
            margin="normal"
            onChange={this.handleInputChange('partNumber')}
            value={this.state.part.partNumber}
            fullWidth
          />
          <TextField
            id="cost"
            label="Cost"
            margin="normal"
            onChange={this.handleInputChange('cost')}
            value={this.state.part.cost}
            fullWidth
          />
          <TextField
            id="quantity"
            label="Quantity"
            margin="normal"
            type="number"
            onChange={this.handleInputChange('inStock')}
            value={this.state.part.inStock}
            fullWidth
          />
          <Button variant="outlined" color="primary" onClick={() => this.updatePart(this.state.part.id, this.state.part)}>
          Save
          </Button>
        </Paper>
      </Modal>

    )
  }
}

export default withStyles(styles)(EditPart);
