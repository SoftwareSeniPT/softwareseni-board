import React from 'react';
import TotalStaff from '../../components/total-staff';
import SelectFromSpreadsheet from '../../utils/select-from-spreadsheet';
import ProgressList from '../../components/progress-list';
import Total from '../../components/total';

const spreadSheetData = new SelectFromSpreadsheet('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/1/public/values?alt=json&gid=1927669435');

export default {
  name: 'HRD Board',
  components: [{
    columns: 1,
    blocks: [{
      title: 'Total Staff',
      type: 'square',
      component: (value) => <TotalStaff value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).getTotalNumber(),
    }, {
      title: 'Staff Division',
      type: 'long-vertical',
      component: (value) => <ProgressList lists={value} space={4} />,
      resolver: () => spreadSheetData.selectSheet(1).getList(),
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Hiring Pipeline',
      type: 'square',
      component: (value) => <Total value={value} />,
      resolver: () => Promise.resolve(1),
    }, {
      title: 'Opened Position',
      type: 'long-vertical',
      component: (value) => <ProgressList lists={value} space={3} />,
      resolver: () => spreadSheetData.selectSheet(4).getList(),
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Office Plant',
      type: 'square',
      component: (value) => <Total value={value} />,
      resolver: () => spreadSheetData.selectSheet(2).selectByName('Plants'),
    }, {
      title: 'Attendance',
      type: 'long-vertical',
      component: (value) => <ProgressList lists={value} space={7} />,
      resolver: () => spreadSheetData.selectSheet(3).getList(),
    }],
  }],
};
