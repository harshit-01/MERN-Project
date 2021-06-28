import React, { useEffect, useState } from "react";
import {Container,Typography,AppBar,Grow,Grid} from "@material-ui/core";
import memories from "./images/memories.png";
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js";
import useStyles from "./styles.js"

const App =()=>{
    // eslint-disable-next-line
    const classes = useStyles();
    const [currentId,setCurrentId] =useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])
    return (
          <Container maxwidth="lg">
                <AppBar className ="classes.appBar" position="static" color="inherit" >
                    <Typography className ="classes.heading" variant="h2" align="center">Memories
                    <img className ="classes.image" src={memories} alt="Memories" height="60" width="60"/></Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch"
                        spacing ={3}>
                            <Grid items xs={12} sm={7}>
                                   <Posts setCurrentId={setCurrentId}/> 
                            </Grid>
                            <Grid items xs={12} sm={4}>
                                    <Form currentId = {currentId} setCurrentId={setCurrentId}/> 
                            </Grid>

                        </Grid>
                    </Container>
                </Grow>
          </Container>
    )
}
export default App;