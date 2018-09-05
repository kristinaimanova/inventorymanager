import React, { Component } from 'react';
import * as partsApi from './api'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import Part from './part'
import NewPart from './new'
import EditPart from './edit'

const styles = theme => ({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: '25px',
    backgroundColor: theme.palette.background.paper,

  },
  title: {
    width: '50%',
    marginLeft: '20px',
    marginTop: '20px',
    display: 'inline'
  },
  createButton: {
    float: 'right',
    marginRight: '20px'
  },
  div: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: '30px'
  }
});


class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      parts: [],
      open: false,
      checked: true,
      showDeletedParts: true
    }
    this.lastItem = React.createRef()
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updatePart = (index, newPart) => {
    let newParts = Array.from(this.state.parts)
    let updatedPart = Object.assign({}, newParts[index], newPart)
    newParts[index] = updatedPart
    this.setState({
      parts: newParts
    })
  }

  addPart = (newPart) => {
    let newParts = Array.from(this.state.parts)
    newParts.push(newPart)
    this.setState({
      parts: newParts,
      checked: true
    })
    this.lastItem.scrollIntoView()
  }

  deletePart = (index) => {
    let newParts = Array.from(this.state.parts)
    newParts.splice(index, 1)
    this.setState({
      parts: newParts
    })
  }

  openEditModal = (index) => {
    let allParts = Array.from(this.state.parts)
    let editPart = allParts[index]
    this.setState({
      editModal: true,
      editPart: editPart,
      editIndex: index
    })
  }

  closeEditModal = () => {
    this.setState({
      editModal: false
    })
  }


  componentDidMount = () => {
      partsApi.getParts().then((parts)=>{
			  this.setState({
          parts: parts
        })
		});
  }
  render() {
    const { classes } = this.props
    const { parts } = this.state
    return (
      <div className={classes.div}>
      <Typography  classes={{root: classes.title}} variant="display1">Inventory Management</Typography>
      <Button color="primary" onClick={this.handleOpen} classes={{root: classes.createButton}} variant="outlined">
       New Part
      </Button>

      <NewPart
        open={this.state.open}
        handleClose={this.handleClose.bind(this)}
        createPart={partsApi.createPart.bind(this)}
        addPart={this.addPart.bind(this)}
      />
      <EditPart
        part={this.state.editPart}
        open={this.state.editModal}
        index={this.state.editIndex}
        handleClose={this.closeEditModal.bind(this)}
        editPart={partsApi.updatePart.bind(this)}
        updatePart={this.updatePart.bind(this)}
      />
      <List classes={{root: classes.root}}>
        {parts.map((part, index) =>


          <Part
            part={part}
            index={index}
            checked={this.state.checked}
            receivePart={partsApi.receivePart.bind(this)}
            consumePart={partsApi.consumePart.bind(this)}
            deletePart={partsApi.deletePart.bind(this)}
            removePart={this.deletePart.bind(this)}
            updatePart={this.updatePart.bind(this)}
            openEditModal={this.openEditModal.bind(this)}
            />
          )}
      </List>
      <div  ref={(el) => {this.lastItem = el; }}/>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
