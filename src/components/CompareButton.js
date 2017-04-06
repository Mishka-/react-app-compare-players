import React, {Component}from 'react';
import Redux, { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/ActionTypes';


class CompareButton  extends Component {
    constructor(props) {
        super(props);
        this.dispatchTableProps = this.dispatchTableProps.bind(this);
        this.state = {
        }
    }


    dispatchTableProps() {
      const { firstData, active1, secondData, active2   } = this.props;
      var playerA = firstData[active1];
      var playerB = secondData[active2];
      if(playerA || playerB){
        this.props.onDispatchTableProps(playerA, playerB);
      }


    }

    render() {
        return ( <div>
            <input className = "cBtn" type = "button" value = "compare"
            onClick = {this.dispatchTableProps.bind(this)} /> </div>
        )
    }
}


export default connect(
    state => ({
        tableStore: state
    }),
    dispatch => ({
        onDispatchTableProps: (dataTable1, dataTable2) => {
            dispatch({
                type: 'GET_TABLE_DATA',
                firstTable: dataTable1,
                secondTable:dataTable2
            })
        }
    })
)(CompareButton);
