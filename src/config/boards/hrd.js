import React from 'react';
import TotalStaff from '../../components/total-staff';
import SelectFromSpreadsheet from '../../utils/select-from-spreadsheet';
import ProgressList from '../../components/progress-list';
import Total from '../../components/total';
import Announcement from '../../components/announcement';
import Chart from '../../components/chart';

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
      resolver: () => spreadSheetData.selectSheet(4).getTotalNumber(),
    }, {
      title: 'Opened Position',
      type: 'long-vertical',
      component: (value) => {
        console.log(value, 'value');
        return <ProgressList lists={value} space={3} />;
      },
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
  }, {
    columns: 2,
    blocks: [{
      title: 'Announcements',
      type: 'full-square',
      component: (value) => <Announcement value={value} />,
      resolver: () => spreadSheetData.selectSheet(6).getSingleList(1),
    }, {
      title: 'Attendance',
      type: 'long-horizontal',
      component: (value) => <Chart value={value} />,
      resolver: () => spreadSheetData.selectSheet(7).getAllList(),
    }],
  }],
};
