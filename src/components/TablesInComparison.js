import React, {Component}from 'react';
import reducer from '../reducers/PlayersTable';
import { createStore } from 'redux';
import Redux, { connect} from 'react-redux';

import _ from 'lodash';

class TablesInComparison  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        if(this.props.tableStore.length == 0){
          return
        }
    }


    render() {
      if(this.props.tableStore.length == 0 || !this.props.tableStore[0] || !this.props.tableStore[1]){
        return null;
      }

      const classesA = _.mapValues(this.props.tableStore[3], (value) => `td ${value}`);
      const classesB = _.mapValues(this.props.tableStore[4], (value) => `td ${value}`);

      const playerA = this.props.tableStore[0];
      const playerB = this.props.tableStore[1];
      console.log(this.props.tableStore[3] + this.props.tableStore[4]);
        return ( <div>
          <table className="playerTable">
      <tbody>
          <tr>
              <th>Id</th>
              <td>{playerA.id}</td>
          </tr>
          <tr>
              <th>Name</th>
              <td>{playerA.name}</td>
          </tr>
          <tr>
              <th>Battles total</th>
              <td className={classesA.battles_total}>{playerA.battles_total}</td>
          </tr>
          <tr>
              <th>Wins total</th>
              <td className={classesA.wins_total}>{playerA.wins_total}</td>
          </tr>
          <tr>
              <th>Days total</th>
              <td className={classesA.days_total}>{playerA.days_total}</td>
          </tr>
          <tr>
              <th>Exp total</th>
              <td className={classesA.exp_total}>{playerA.exp_total}</td>
          </tr>
          <tr>
              <th>Exp avg</th>
              <td className={classesA.exp_avg}>{playerA.exp_avg}</td>
          </tr>
          <tr>
              <th>Player rating</th>
              <td>{playerA.rating}</td>
          </tr>
          <tr>
              <th>Vehicles x</th>
              <td className={classesA.vehicles_x}>{playerA.vehicles_x}</td>
          </tr>
          <tr>
              <th>Created at</th>
              <td>{playerA.created_at}</td>
          </tr>
      </tbody>
  </table>

  <table className="playerTable">
      <tbody>
          <tr>
              <th>Id</th>
              <td>{playerB.id}</td>
          </tr>
          <tr>
              <th>Name</th>
              <td>{playerB.name}</td>
          </tr>
          <tr>
              <th>Battles total</th>
              <td className={classesB.battles_total}>{playerB.battles_total}</td>
          </tr>
          <tr>
              <th>Wins total</th>
              <td className={classesB.wins_total}>{playerB.wins_total}</td>
          </tr>
          <tr>
              <th>Days total</th>
              <td className={classesB.days_total}>{playerB.days_total}</td>
          </tr>
          <tr>
              <th>Exp total</th>
              <td className={classesB.exp_total}>{playerB.exp_total}</td>
          </tr>
          <tr>
              <th>Exp avg</th>
              <td className={classesB.exp_avg}>{playerB.exp_avg}</td>
          </tr>
          <tr>
              <th>Player rating</th>
              <td>{playerB.rating}</td>
          </tr>
          <tr>
              <th>Vehicles x</th>
              <td className={classesB.vehicles_x}>{playerB.vehicles_x}</td>
          </tr>
          <tr>
              <th>Created at</th>
              <td>{playerB.created_at}</td>
          </tr>
      </tbody>
  </table>
        </div>
        )
    }

}


export default connect(
    state => ({
        tableStore: state
    }))(TablesInComparison);
