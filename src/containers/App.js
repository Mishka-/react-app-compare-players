import React, { Component } from 'react';
import load from '../utils/load';
import PlayersList from '../components/playersList';
import FirstPlayerInput from '../components/FirstPlayerInput';
import SecondPlayerInput from '../components/SecondPlayerInput';
import CompareButton from '../components/CompareButton';
import TablesInComparison from '../components/TablesInComparison';

export default class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
      data: null,
      playersList:null,
      firstTableData:null,
      secondTableData:null,
      active1:null,
      active2:null,
      items:null,
      term: ''
    };
    console.log(this.props)
    this.loadData();
 }

 loadData() {

    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData,
        playersList:this.initialData,
        firstTableData:this.initialData,
        secondTableData:this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  componentWillMount() {
  }

  render() {
    return (
    <div className="container-fluid">
  <div>
      <FirstPlayerInput  data={ this.initialData} update={this.updateData.bind(this)}/>
  </div>
  <div>
      <SecondPlayerInput data={ this.initialData} update={this.updateData.bind(this)}/>
  </div>
  <PlayersList  data={this.state.playersList} />

  <div>
      <CompareButton firstData={ this.state.firstTableData }
                     active1={ this.state.active1 }
                     secondData={ this.state.secondTableData }
                     active2={ this.state.active2 }/>
  </div>
  <TablesInComparison/>

</div>
    );

  }
}
