import React from 'react';
import HiringPipeline from '../../components/hiring-pipeline';
import OfficePlants from '../../components/office-plant';
import StaffDivision from '../../components/staff-division';
import OpenedPosition from '../../components/opened-position';
import Attendance from '../../components/attendance';
import getNumber from '../../utils/get-number';

export default {
  name: 'Support Board',
  components: [{
    columns: 2,
    blocks: [{
      title: 'Raised Yesterday',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Resolved Yesterday',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Top CS',
      type: 'long-vertical',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Top PM',
      type: 'long-vertical',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }],
  }, {
    columns: 2,
    blocks: [{
      title: 'Raised Yesterday',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Resolved Yesterday',
      type: 'square',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Top CS',
      type: 'long-horizontal',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }, {
      title: 'Top PM',
      type: 'long-horizontal',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }],
  }, {
    columns: 1,
    blocks: [{
      title: 'Top PM',
      type: 'long-vertical',
      component: (value) => <HiringPipeline value={value} />,
      resolver: () => 1,
    }],
  }],
};
