import React from 'react'; 
import {connect} from 'react-redux';
import {Footer} from './footer/footer.jsx';
import Header from './header/Header.jsx';
import Feed from './Feed/Feed.jsx';
 
import {Switch, Route } from "react-router-dom";
import {GetCallById, GetCallsToDisplay, Reset, ArchiveCall} from './actions/actions';
 
import { withRouter } from "react-router-dom";

const App = (props) => { 

  return (
    <div className='container'>
      <Header/> 
      <Switch>
          <Route exact path="/" render={()=><Feed props={props} showArchivedCalls={false}/>} />
          <Route exact path="/archived" render={()=><Feed props={props} showArchivedCalls={true}/>} />
      </Switch> 
      <Footer props={props}/>
    </div>
  );
};
  
const mapStateToProps = state => ({
  feedCalls: state.feedCalls,
  call: state.call,
})

const mapActionsToState = dispatch =>({  
  ArchiveCall: (id, state)=>dispatch(ArchiveCall(id, state)),
  GetCallById: (id)=>dispatch(GetCallById(id)),
  GetCallsToDisplay: ()=>dispatch(GetCallsToDisplay()),
  Reset: ()=>dispatch(Reset()),
})

export default connect( mapStateToProps, mapActionsToState )(withRouter(App));
