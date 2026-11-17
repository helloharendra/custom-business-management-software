import { useState } from 'react'
import { Calendar, Check, Plus } from 'lucide-react'
import { Avatar, Badge, PageHeader, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { projects, tasks as initial } from '../data'

const columns = ['To do', 'In progress', 'Review', 'Done']
const prio = { High: 'red', Medium: 'amber', Low: 'slate' }

export default function Projects() {
  const { openContact } = useContact()
  const [tasks, setTasks] = useState(initial)
  const [project, setProject] = useState('All')
  const list = tasks.filter((t) => project === 'All' || t.project === project)
  const complete = (id) => setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, status: t.status === 'Done' ? 'To do' : 'Done', due: t.status === 'Done' ? 'Today' : 'Done' } : t)))

  return (
    <>
      <PageHeader
        title="Projects & tasks"
        subtitle="Click the circle on a task card to mark it done."
        actions={<>
          <Segmented options={['All', ...projects.map((p) => p.name)]} value={project} onChange={setProject} />
          <button onClick={() => openContact('Create Task & Assign')} className="btn-primary"><Plus className="h-4 w-4" /> Task</button>
        </>}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {columns.map((c) => {
          const items = list.filter((t) => t.status === c)
          return (
            <div key={c} className="rounded-2xl bg-slate-100/70 p-3 animate-fade-up">
              <div className="mb-3 flex items-center justify-between px-1"><p className="text-sm font-semibold text-slate-700">{c}</p><span className="rounded-md bg-white px-2 text-xs font-bold text-slate-500 shadow-sm">{items.length}</span></div>
              <div className="space-y-3">
                {items.map((t) => (
                  <div key={t.id} className="card p-4">
                    <div className="flex items-start gap-3">
                      <button onClick={() => complete(t.id)} className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ring-2 transition ${t.status === 'Done' ? 'bg-emerald-500 text-white ring-emerald-500' : 'ring-slate-300 hover:ring-brand-500'}`}>
                        {t.status === 'Done' && <Check className="h-3 w-3" />}
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className={`font-semibold leading-snug ${t.status === 'Done' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{t.title}</p>
                        <p className="mt-1 text-xs text-slate-400">{t.project}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2"><Avatar name={t.owner} size="sm" /><Badge tone={prio[t.priority]} dot={false}>{t.priority}</Badge></div>
                      <span className="flex items-center gap-1 text-xs text-slate-400"><Calendar className="h-3.5 w-3.5" />{t.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
