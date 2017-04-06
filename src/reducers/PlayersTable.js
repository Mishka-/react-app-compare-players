export default function playersTable(state = [], action){



    const flagsA = {};
    const flagsB = {};

  if(action.type === 'GET_TABLE_DATA'){

    ['battles_total', 'wins_total', 'exp_avg', 'exp_total', 'days_total', 'exp_total', 'vehicles_x'].forEach(function (field) {

      const valueA = action.firstTable[field];
      const valueB = action.secondTable[field];

      var flagA = 'unknown';
      var flagB = 'unknown';

      if (valueA !== undefined && valueB !== undefined) {
            if (valueA === valueB) {
              flagA = flagB = 'orange';
            } else {
              flagA = valueA > valueB ? 'red' : 'green';
              flagB = valueB > valueA ? 'red' : 'green';
            }
          }
          flagsA[field] = flagA;
          flagsB[field] = flagB;

    });

    return [
      ...state,
      action.firstTable,
      action.secondTable,
      flagsA,
      flagsB
    ];

  }
  return state;
}
