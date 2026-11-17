import {
  BarChart3, Boxes, Briefcase, CheckSquare, Contact, LayoutDashboard, Receipt, Settings, Users, Workflow,
} from 'lucide-react'

export const app = {
  name: 'BizSuite',
  tagline: 'Business Management Platform',
  logo: Briefcase,
  user: { name: 'Sonal Agarwal', role: 'Founder & CEO' },
  searchPlaceholder: 'Search projects, people, invoices…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Workspace',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Projects & Tasks', to: '/projects', icon: CheckSquare },
      { label: 'Team', to: '/team', icon: Users },
    ],
  },
  {
    title: 'Business',
    items: [
      { label: 'CRM & Clients', icon: Contact },
      { label: 'Billing & Invoices', icon: Receipt },
      { label: 'Inventory', icon: Boxes },
      { label: 'Workflow Automation', icon: Workflow },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Reports & Analytics', icon: BarChart3 },
      { label: 'Roles & Settings', icon: Settings },
    ],
  },
]
