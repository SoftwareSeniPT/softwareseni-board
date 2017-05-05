import React from 'react';
import TotalStaff from '../../components/total-staff';
import HiringPipeline from '../../components/hiring-pipeline';
import OfficePlants from '../../components/office-plant';
import StaffDivision from '../../components/staff-division';
import OpenedPosition from '../../components/opened-position';
import Attendance from '../../components/attendance';

export default {
  name: 'HRD Board 1',
  components: {
    square: [{
      title: 'Office Plant',
      component: (value) => <OfficePlants value={value} />,
      resolver: () => Promise.resolve(1),
    }, {
      title: 'Total Staff',
      component: (value) => <TotalStaff value={value} />,
      resolver: () => Promise.resolve(23),
    }, {
      title: 'Hiring Pipeline',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => Promise.resolve(5),
    }],
    long: [{
      title: 'Total Staff',
      component: (value) => <Attendance value={value} />,
      resolver: () => Promise.resolve([]),
    }, {
      title: 'Staff Division',
      component: (value) => <StaffDivision value={value} />,
      resolver: () => Promise.resolve([]),
    }, {
      title: 'Opened Position',
      component: (value) => <OpenedPosition value={value} />,
      resolver: () => Promise.resolve([]),
    }],
  },
};
