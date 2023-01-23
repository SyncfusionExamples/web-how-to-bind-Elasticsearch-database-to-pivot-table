import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
    url: 'https://localhost:7105/Elasticsearch',
    enableSorting: true,
    expandAll: false,
    dataSource: [],
    columns: [
      { name: 'State' }
    ],
    rows: [
      { name: 'Location' },
      { name: 'Rainfall' }
    ],
    values: [
      { name: 'Wind Speed' },
      { name: 'Min Temperature' },
      { name: 'Max Temperature' },
    ],
    filters: []
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
