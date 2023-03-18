import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
import Admin from './admin/Admin';
import Class from './forms/Class';
import Examlist from './forms/Examlist';
import Exam from './forms/Exam';
import Form from './forms/Form';
import Grade from './forms/Grade';
import Info from './forms/Info';
import Info2 from './forms/Info2';
import Manage from './forms/Manage';
import Online from './forms/Online';
import Payment from './forms/Payment';
import Profile from './forms/Profile';
import Sub1 from './forms/Sub1';
import Sub2 from './forms/Sub2';
import Sub3 from './forms/Sub3';
import Subject from './forms/Subject';
import Tab from './forms/Tab';
import Teacher from './forms/Teacher';
import ManagemarkView from './forms/ManagemarkView';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
  { path: '/dashboard/admin', element: <Admin />, auth: authRoles.admin },
  { path: '/dashboard/student_add', element: <Form />, auth: authRoles.admin },
  { path: '/dashboard/js1-subject', element: <Sub1 />, auth: authRoles.admin },
  { path: '/dashboard/examlist', element: <Examlist />, auth: authRoles.admin },
  { path: '/dashboard/js2-subject', element: <Sub2 />, auth: authRoles.admin },
  { path: '/dashboard/js3-subject', element: <Sub3 />, auth: authRoles.admin },
  { path: '/dashboard/manage-mark-view', element: <ManagemarkView /> },
  { path: '/dashboard/jss1-student_information', element: <Info />, auth: authRoles.admin },
  { path: '/dashboard/jss2-student_information', element: <Info2 />, auth: authRoles.admin },
  { path: '/dashboard/teacher', element: <Teacher />, auth: authRoles.admin },
  { path: '/dashboard/subject', element: <Subject />, auth: authRoles.admin },
  { path: '/dashboard/class', element: <Class />, auth: authRoles.admin },
  { path: '/dashboard/exam', element: <Exam />, auth: authRoles.admin },
  { path: '/dashboard/grade', element: <Grade />, auth: authRoles.admin },
  { path: '/dashboard/tabulation-sheet', element: <Tab />, auth: authRoles.admin },
  { path: '/dashboard/online-exam', element: <Online />, auth: authRoles.admin },
  { path: '/dashboard/manage-online-exam', element: <Manage />, auth: authRoles.admin },
  { path: '/dashboard/student-payment', element: <Payment />, auth: authRoles.admin },
  { path: '/dashboard/profile', element: <Profile />, auth: authRoles.admin },
];

export default dashboardRoutes;
