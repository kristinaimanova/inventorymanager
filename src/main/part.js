import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid gainsboro',
    marginBottom: '3px',
    minHeight: '116px',
    display: 'flex',
    padding: '14px',
    '&:hover':{
      backgroundColor: 'whitesmoke'
    },
    '&:hover $changeIcons':{
      visibility: 'visible'
    }
  },
  partName: {
    width: '100%'
  },
  qty: {

  },
  changeIcons: {
    visibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    height: '90%',
    top: 5,
    right: 5,
    marginLeft: '1px solid gainsboro'
  }
});


class Part extends Component {
  constructor(props){
    super(props)
    this.state ={
      showDescription: true
    }
  }

  receivePart = (id, qty) => {
    let quantity = {
      "quantity": qty
    }
    this.props.receivePart(id, quantity).then((part) =>
      this.props.updatePart(this.props.index, part)
    )
  }

  consumePart = (id, qty) => {
    if (this.props.part.inStock > 0){
      let quantity = {
        "quantity": qty
      }
      this.props.consumePart(id, quantity).then((part) =>
        this.props.updatePart(this.props.index, part)
      )
    }
    else {
      console.log("you can't have less than zero parts")
    }
  }

  deletePart = (id) => {
    this.props.removePart(this.props.index)
    this.props.deletePart(id)
  }

  showDescription = () => {
    this.setState((prevState) => ({
        showDescription: !prevState.showDescription
      }))
  }

  render() {
    const { classes, part } = this.props
    const { showDescription } = this.state
    return (

      <Slide direction="right" mountOnEnter unmountOnExit in={part.name} style={{ transitionDelay: part.name ? 100 : 100 }}>
        <ListItem classes={{root: classes.root}}>
          <div style={{width: '79%', display: 'inline-block', borderRight: '1px solid gainsboro', minHeight: '96px', paddingRight: '5px'}}>
            <Typography variant="title" classes={{root: classes.partName}}> {part.name}  </Typography>
            <span style={{marginRight: '10px'}}> Part number: {part.partNumber} </span>
            <span> Cost: {part.cost} </span>
            {showDescription && <p> {part.description} </p>}
            <img src={part.image} style={{width: '80px'}}/>
          </div>

          <div style={{width: '19%', textAlign: 'center', alignItems: 'center', justifyContent: 'center', padding: '10px', float: 'right', display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Typography classes={{root: classes.qty}} variant="headline"> {part.inStock} </Typography>
              <div style={{marginTop: '10px'}}>
                <IconButton onClick={() => this.consumePart(part.id, 1)}> <RemoveIcon /> </IconButton>
                <IconButton onClick={() => this.receivePart(part.id, 1)}> <AddIcon /> </IconButton>
              </div>
            </div>
            <div className={classes.changeIcons}>
              <IconButton onClick={() => this.props.openEditModal(this.props.index)}> <EditIcon /> </IconButton>
              <IconButton onClick={() => this.deletePart(part.id)}> <DeleteIcon /> </IconButton>
            </div>
          </div>
        </ListItem>
      </Slide>
    );
  }
}

export default withStyles(styles)(Part);
