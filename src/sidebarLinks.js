export default [
  {
    name: 'Dashboard',
    icon: 'ti-panel',
    collapsed: false,
    children: [{
      name: 'Overview',
      path: '/admin/overview'
    }]
  },
  {
    name: 'Measurement',
    icon: 'ti-dashboard',
    collapsed: true,
    children: [{
      name: 'Temperature',
      path: '/measurement/temperature'
    },
    {
      name: 'Light',
      path: '/measurement/light'
    },
    {
      name: 'Water',
      path: '/measurement/water'
    }]
  },
  {
    name: 'Plan',
    icon: 'ti-view-list-alt',
    path: '/plan'
  },
  {
    name: 'Summary',
    icon: 'ti-image',
    path: '/summary'
  },
  {
    name: 'Calendar',
    icon: 'ti-calendar',
    path: '/calendar'
  }
]
