// Sample data for the UI demo. The complete project uses live APIs + database.
export const revenue = [
  { label: 'Jun', revenue: 18, profit: 5 }, { label: 'Jul', revenue: 21, profit: 6 }, { label: 'Aug', revenue: 24, profit: 7 },
  { label: 'Sep', revenue: 23, profit: 7 }, { label: 'Oct', revenue: 29, profit: 9 }, { label: 'Nov', revenue: 33, profit: 11 },
]

export const departments = [
  { name: 'Sales', head: 'Arjun Kapoor', people: 14, kpi: 'Target 112%', progress: 100 },
  { name: 'Operations', head: 'Meenal Joshi', people: 22, kpi: 'SLA 96%', progress: 96 },
  { name: 'Finance', head: 'Rakesh Jain', people: 6, kpi: 'DSO 28 days', progress: 78 },
  { name: 'Support', head: 'Tanya Dsouza', people: 9, kpi: 'CSAT 4.7', progress: 94 },
]

export const projects = [
  { id: 1, name: 'Website revamp', client: 'Internal', due: '30 Nov', progress: 72, color: 'from-sky-400 to-blue-600' },
  { id: 2, name: 'Mumbai branch launch', client: 'Expansion', due: '15 Dec', progress: 45, color: 'from-violet-400 to-fuchsia-600' },
  { id: 3, name: 'ISO 9001 audit', client: 'Compliance', due: '08 Dec', progress: 30, color: 'from-amber-400 to-orange-600' },
]

export const tasks = [
  { id: 1, title: 'Finalise homepage copy', project: 'Website revamp', owner: 'Ishaan Roy', due: 'Today', priority: 'High', status: 'In progress' },
  { id: 2, title: 'Lease agreement sign-off', project: 'Mumbai branch launch', owner: 'Sonal Agarwal', due: 'Tomorrow', priority: 'High', status: 'To do' },
  { id: 3, title: 'Hire 4 sales executives', project: 'Mumbai branch launch', owner: 'Meenal Joshi', due: '25 Nov', priority: 'Medium', status: 'In progress' },
  { id: 4, title: 'Update SOP documents', project: 'ISO 9001 audit', owner: 'Rakesh Jain', due: '28 Nov', priority: 'Medium', status: 'To do' },
  { id: 5, title: 'Design system in Figma', project: 'Website revamp', owner: 'Ishaan Roy', due: 'Done', priority: 'Low', status: 'Done' },
  { id: 6, title: 'Internal audit checklist', project: 'ISO 9001 audit', owner: 'Tanya Dsouza', due: '02 Dec', priority: 'Low', status: 'Review' },
  { id: 7, title: 'Set up branch bank account', project: 'Mumbai branch launch', owner: 'Rakesh Jain', due: 'Done', priority: 'Medium', status: 'Done' },
]

export const team = [
  { name: 'Arjun Kapoor', role: 'Head of Sales', dept: 'Sales', status: 'In office', email: 'arjun@bizsuite.in' },
  { name: 'Meenal Joshi', role: 'Operations Manager', dept: 'Operations', status: 'In office', email: 'meenal@bizsuite.in' },
  { name: 'Rakesh Jain', role: 'Finance Controller', dept: 'Finance', status: 'Remote', email: 'rakesh@bizsuite.in' },
  { name: 'Tanya Dsouza', role: 'Support Lead', dept: 'Support', status: 'In office', email: 'tanya@bizsuite.in' },
  { name: 'Ishaan Roy', role: 'Product Designer', dept: 'Operations', status: 'On leave', email: 'ishaan@bizsuite.in' },
  { name: 'Pallavi Menon', role: 'HR Executive', dept: 'Admin', status: 'In office', email: 'pallavi@bizsuite.in' },
  { name: 'Kunal Shah', role: 'Account Manager', dept: 'Sales', status: 'Field visit', email: 'kunal@bizsuite.in' },
  { name: 'Ritu Chawla', role: 'Accountant', dept: 'Finance', status: 'Remote', email: 'ritu@bizsuite.in' },
]
