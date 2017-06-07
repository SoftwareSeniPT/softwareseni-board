import React from 'react';
import EnglishLevel from '../../components/english-level';
import SelectFromSpreadsheet from '../../utils/select-from-spreadsheet';
import BigText from '../../components/big-text';
import Chart from '../../components/chart';

const spreadSheetData = new SelectFromSpreadsheet('https://spreadsheets.google.com/feeds/list/1nWh9z0AaxURR7DW-aRSG0AIsKsASxh8fQPT4nbVOdGs/1/public/values?alt=json&gid=1927669435');

export default {
  name: 'English Board',
  components: [{
    columns: 2,
    blocks: [{
      title: 'This Month Proficiency Level',
      type: 'full-square',
      component: (value) => <EnglishLevel value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).getTotalNumber(),
    }, {
      title: 'Proficiency Level',
      type: 'long-horizontal',
      component: (value) => <Chart value={value} />,
      resolver: () => spreadSheetData.selectSheet(2).getAllList(),
    }],
  }, {
    columns: 3,
    blocks: [{
      title: 'Proficiency Level Per Division',
      type: 'full-horizontal',
      component: (value) => <Chart value={value} />,
      resolver: () => spreadSheetData.selectSheet(3).getAllList(),
    }, {
      title: 'Best Improvement',
      type: 'square',
      component: (value) => <BigText value={value} />,
      resolver: () => spreadSheetData.selectSheet(4).selectByName('Best Improvement', false),
    }, {
      title: 'Best English',
      type: 'square',
      component: (value) => <BigText value={value} />,
      resolver: () => spreadSheetData.selectSheet(4).selectByName('Best English', false),
    }],
  }],
};
