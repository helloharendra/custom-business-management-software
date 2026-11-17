import { Link } from 'react-router-dom'
import { CheckSquare, IndianRupee, TrendingUp, Users } from 'lucide-react'
import { Card, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { TrendChart } from '../components/Charts'
import { departments, projects, revenue } from '../data'

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Company overview"
        title="One system for your whole business."
        subtitle="Sales, operations, finance and people — built around the way your company actually works."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Revenue (Nov)" value="₹33L" /><HeroStat label="Open tasks" value="47" /></div>}
      >
        <Link to="/projects" className="btn bg-white text-brand-700 hover:bg-brand-50"><CheckSquare className="h-4 w-4" /> My tasks</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue (FY)" value="₹1.48 Cr" delta="21.3%" icon={IndianRupee} />
        <StatCard label="Net profit margin" value="31%" delta="2.4%" icon={TrendingUp} tone="emerald" />
        <StatCard label="Employees" value="51" delta="6" icon={Users} tone="violet" />
        <StatCard label="Tasks completed" value="412" delta="12.0%" icon={CheckSquare} tone="amber" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Revenue & profit" subtitle="₹ lakh" className="xl:col-span-2">
          <TrendChart data={revenue} series={[{ key: 'revenue', name: 'Revenue' }, { key: 'profit', name: 'Profit' }]} format={(v) => `₹${v}L`} />
        </Card>
        <Card title="Active projects">
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.id} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <span className={`h-9 w-9 rounded-xl bg-gradient-to-br ${p.color}`} />
                  <div className="flex-1"><p className="font-semibold text-slate-800">{p.name}</p><p className="text-xs text-slate-400">{p.client} · due {p.due}</p></div>
                  <span className="text-sm font-bold text-slate-700">{p.progress}%</span>
                </div>
                <div className="mt-3"><Progress value={p.progress} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {departments.map((d) => (
          <Card key={d.name}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{d.name}</p>
            <p className="mt-2 text-xl font-bold text-slate-900">{d.kpi}</p>
            <p className="mt-1 text-xs text-slate-500">{d.head} · {d.people} people</p>
            <div className="mt-4"><Progress value={d.progress} tone={d.progress > 90 ? 'green' : 'amber'} /></div>
          </Card>
        ))}
      </div>
    </>
  )
}
