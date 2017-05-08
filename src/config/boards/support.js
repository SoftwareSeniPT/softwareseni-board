import React from 'react';
import HiringPipeline from '../../components/hiring-pipeline';
import ProgressList from '../../components/progress-list';
import Total from '../../components/total';
import Chart from '../../components/chart';
import SelectFromSpreadsheet from '../../utils/select-from-spreadsheet';

const spreadSheetData = new SelectFromSpreadsheet('https://spreadsheets.google.com/feeds/list/1lyL3GgAo5FQGZtr741_UzGALdCo-rdLPR-SmCKd2AfY/1/public/values?alt=json&gid=1927669435');

export default {
  name: 'Support Board',
  components: [{
    columns: 2,
    blocks: [{
      title: 'Raised Yesterday',
      type: 'square',
      component: (value) => <Total value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).selectByName('Raised Yesterday'),
    }, {
      title: 'Resolved Yesterday',
      type: 'square',
      component: (value) => <Total value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).selectByName('Resolved Yesterday'),
    }, {
      title: 'Top CS',
      type: 'long-vertical',
      component: (value) => <ProgressList progress={false} lists={value} space={3} />,
      resolver: () => spreadSheetData.selectSheet(2).getList(true),
    }, {
      title: 'Top PM',
      type: 'long-vertical',
      component: (value) => <ProgressList progress={false} lists={value} space={2} />,
      resolver: () => spreadSheetData.selectSheet(3).getList(true),
    }],
  }, {
    columns: 2,
    blocks: [{
      title: 'Open Today',
      type: 'square',
      component: (value) => <Total value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).selectByName('Open Today'),
    }, {
      title: 'Average Reply Time',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => spreadSheetData.selectSheet(5).getAverage(),
    }, {
      title: 'Daily Tickets',
      type: 'long-horizontal',
      component: (value) => <Chart value={value} />,
      resolver: () => spreadSheetData.selectSheet(6).getAllList(),
    }, {
      title: 'Average Response Time',
      type: 'long-horizontal',
      component: (value) => <Chart value={value} />,
      resolver: () => spreadSheetData.selectSheet(5).getAllList(),
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Ticket Details',
      type: 'long-vertical',
      component: (value) => <ProgressList progress={false} lists={value} space={2} />,
      resolver: () => spreadSheetData.selectSheet(4).getList(),
    }],
  }],
};
