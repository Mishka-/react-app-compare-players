//export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';
export const GET_TABLE_DATA = 'GET_TABLE_DATA';

export const getTableData = ({firstTable, secondTable})=>({
  type:GET_TABLE_DATA,
  firstTable,
  secondTable
});
