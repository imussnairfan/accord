import React from 'react';
import { AiFillProject, AiOutlineCalendar} from 'react-icons/ai';
import { BsKanban} from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Accord',
    links: [
      {
        name: 'projects',
        icon: <AiFillProject />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'scheduler',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'progress',
        icon: <BsKanban />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'Black',
    color: '#000000',
  },
  {
    name: 'Green',
    color: '#008000',
  },
  {
    name: 'Purple',
    color: '#800080',
  },
  {
    name: 'Red',
    color: '#cf0000',
  },
  {
    name: 'Golden Yellow',
    color: '#FFC000',
  },
  {
    name: 'Indigo Blue',
    color: '#1E4DB7',
  },
];

export const userProfileData = [
  {
    icon: <AiFillProject />,
    title: 'My Projects',
    desc: 'Project Files Management',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <IoMdContacts />,
    title: 'Employees',
    desc: 'Registration Management ',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <AiOutlineCalendar />,
    title: 'Accord Schedular',
    desc: 'Schedule a meeting',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsKanban />,
    title: 'Accordboard',
    desc: 'Track Progress',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
];

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Ali Irfan',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'Mussna Irfan',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Hammad',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'England',
    ReportsTo: 'Abrar Hassan',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 3,
    Name: 'Abrar Hassan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 4,
    Name: 'Mussna Irfan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 1,
    Name: 'Ali Irfan',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'Mussna Irfan',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Hammad',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'England',
    ReportsTo: 'Abrar Hassan',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 3,
    Name: 'Abrar Hassan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 4,
    Name: 'Mussna Irfan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 1,
    Name: 'Ali Irfan',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'Mussna Irfan',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Hammad',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'England',
    ReportsTo: 'Abrar Hassan',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 3,
    Name: 'Abrar Hassan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 4,
    Name: 'Mussna Irfan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 1,
    Name: 'Ali Irfan',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'Mussna Irfan',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Hammad',
    Title: 'Designer',
    HireDate: '01/02/2021',
    Country: 'England',
    ReportsTo: 'Abrar Hassan',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 3,
    Name: 'Abrar Hassan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 4,
    Name: 'Mussna Irfan',
    Title: 'Manager',
    HireDate: '01/02/2021',
    Country: 'Pakistan',
    ReportsTo: 'No one',
    EmployeeImage: avatar4,
  },
];

export const scheduleDataC = [
  {
    Id: 1,
    Subject: 'Meeting with Fixel cloud Core team',
    Location: 'Google Meet',
    StartTime: '2023-05-14T04:00:00.000Z',
    EndTime: '2023-05-14T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'FYP meeting with Mr. Tariq Naeem',
    Location: 'Zoom',
    StartTime: '2023-05-14T06:30:00.000Z',
    EndTime: '2023-05-14T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'FYP meeting with Accord main team',
    Location: 'Zoom',
    StartTime: '2023-05-14T08:00:00.000Z',
    EndTime: '2023-05-14T10:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'MLSA AU Core Team meeting',
    Location: 'Microsoft Teams',
    StartTime: '2023-05-14T07:30:00.000Z',
    EndTime: '2023-05-14T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Graphics Team of AUCIS preworkshop meeting',
    Location: 'Zoom',
    StartTime: '2023-05-14T04:30:00.000Z',
    EndTime: '2023-05-14T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];