import ResourceView from './ResourceView'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceView
      endpoint={workoutsEndpoint}
      emptyMessage="No workout suggestions are available yet."
      resourceName="workouts"
      summary="Personalized workout ideas ready for the next training session."
      title="Workouts"
    />
  )
}

export default Workouts
