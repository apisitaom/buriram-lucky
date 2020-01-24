import React from 'react';

const ListsEvent = React.lazy(() => import('../src/views/Pages/List/ListsEvent')) 
const Detail = React.lazy(() => import('../src/views/Pages/List/event/detail/Detail')) 
const Charts = React.lazy(() => import('./views/Charts'));
const AddEvent = React.lazy(() => import('./views/Pages/List/event/addevent/Add'));
const EditEvent = React.lazy(() => import('./views/Pages/List/event/editevent /Edit'));
const FromEvent = React.lazy(() => import('./views/Pages/List/components/from/fromevent/FromEvent'));

const routes = [
  { path: '/listsevent', exact: true, name: 'LISTS EVENT', component: ListsEvent },
  { path: '/event/detail/:id', exact: true, name: 'DETAIL', component: Detail },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/event/addevent', exact: true, name: 'ADD EVENT', component: AddEvent },
  { path: '/event/editevent/:id', exact: true, name: 'EDIT EVENT', component: EditEvent },
  { path: 'fromevent/fromgift/fromevent', exact: true, name: 'FROM EVENT', component: FromEvent },

];

export default routes;
