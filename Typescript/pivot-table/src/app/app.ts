import { PivotView, FieldList } from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList);

let pivotTableObj: PivotView = new PivotView({
  dataSourceSettings: {
    url: 'https://localhost:44323/Pivot',
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
  },
  showFieldList: true,
  height: 350
});
pivotTableObj.appendTo('#PivotTable');