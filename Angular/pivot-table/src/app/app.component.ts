import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`,
  providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[] | undefined;
    public dataSourceSettings: IDataOptions | undefined;

    ngOnInit(): void {

        this.dataSourceSettings = {
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
    }
}