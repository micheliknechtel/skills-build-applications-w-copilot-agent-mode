import ResourceView from './ResourceView'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourceView
      endpoint={activitiesEndpoint}
      emptyMessage="No activities have been logged yet."
      resourceName="activities"
      summary="Recent workouts and movement logs captured by OctoFit members."
      title="Activities"
    />
  )
}

export default Activities
