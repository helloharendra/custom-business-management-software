import { Mail, MessageSquare, UserPlus } from 'lucide-react'
import { Avatar, Badge, PageHeader } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { team } from '../data'

const tone = { 'In office': 'green', Remote: 'blue', 'On leave': 'amber', 'Field visit': 'violet' }

export default function Team() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Team" subtitle="Directory, attendance status and roles." actions={<button onClick={() => openContact('Employee Onboarding & HR')} className="btn-primary"><UserPlus className="h-4 w-4" /> Add employee</button>} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {team.map((m) => (
          <div key={m.name} className="card group p-6 text-center animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto w-fit"><Avatar name={m.name} size="lg" /></div>
            <p className="mt-4 font-semibold text-slate-900">{m.name}</p>
            <p className="text-sm text-slate-500">{m.role}</p>
            <div className="mt-3 flex justify-center gap-2"><Badge tone="slate" dot={false}>{m.dept}</Badge><Badge tone={tone[m.status]}>{m.status}</Badge></div>
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
              <a href={`mailto:${m.email}`} onClick={(e) => { e.preventDefault(); openContact('Team Email & Notifications') }} className="btn-ghost py-2 text-xs"><Mail className="h-3.5 w-3.5" /> Email</a>
              <button onClick={() => openContact('Team Chat')} className="btn-ghost py-2 text-xs"><MessageSquare className="h-3.5 w-3.5" /> Chat</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
