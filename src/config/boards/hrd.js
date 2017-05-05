import React from 'react';
import TotalStaff from '../../components/total-staff';
import HiringPipeline from '../../components/hiring-pipeline';
import OfficePlants from '../../components/office-plant';
import StaffDivision from '../../components/staff-division';
import OpenedPosition from '../../components/opened-position';
import Attendance from '../../components/attendance';
import getNumber from '../../utils/get-number';

export default {
  name: 'HRD Board',
  components: [{
    columns: 1,
    blocks: [{
      title: 'Total Staff',
      type: 'square',
      component: (value) => <TotalStaff value={value} />,
      resolver: () => fetch('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/1/public/values?alt=json&gid=1927669435')
        .then((response) => response.json())
        .then((response) => response.feed.entry)
        .then((response) => response.map((res) => getNumber(res.content.$t)))
        .then((response) => response.reduce((a, b) => (a + b), 0)),
    }, {
      title: 'Staff Division',
      type: 'long-vertical',
      component: (value) => <StaffDivision value={value} />,
      resolver: () => fetch('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/1/public/values?alt=json&gid=1927669435')
        .then((response) => response.json())
        .then((response) => response.feed.entry)
        .then((response) => response.map((res) => ({
          title: res.title.$t,
          number: getNumber(res.content.$t),
        }))),
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Hiring Pipeline',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => Promise.resolve(1),
    }, {
      title: 'Opened Position',
      type: 'long-vertical',
      component: (value) => <OpenedPosition value={value} />,
      resolver: () => fetch('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/4/public/values?alt=json&gid=1927669435')
        .then((response) => response.json())
        .then((response) => response.feed.entry)
        .then((response) => response.map((res) => ({
          title: res.title.$t,
          number: getNumber(res.content.$t),
        }))),
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Office Plant',
      type: 'square',
      component: (value) => <OfficePlants value={value} />,
      resolver: () => fetch('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/2/public/values?alt=json&gid=1927669435')
        .then((response) => response.json())
        .then((response) => response.feed.entry)
        .then((response) => response.filter((res) => res.title.$t === 'Plants'))
        .then((response) => {
          if (response.length) {
            return getNumber(response[0].content.$t);
          }
          return 0;
        })
        .then((response) => parseInt(response, 10)),
    }, {
      title: 'Attendance',
      type: 'long-vertical',
      component: (value) => <Attendance value={value} />,
      resolver: () => fetch('https://spreadsheets.google.com/feeds/list/11z7-CHbboe3p6yVKK83fOEecaIB50Lf0517UKhr9ahM/3/public/values?alt=json&gid=1927669435')
        .then((response) => response.json())
        .then((response) => response.feed.entry)
        .then((response) => response.map((res) => ({
          title: res.title.$t,
          number: getNumber(res.content.$t),
        }))),
    }],
  }],
};
