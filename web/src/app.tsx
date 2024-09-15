import { useEffect, useState } from 'react'

import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { Dialog } from './components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './htttp/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}