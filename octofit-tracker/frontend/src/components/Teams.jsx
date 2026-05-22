import ResourceView from './ResourceView'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceView
      endpoint={teamsEndpoint}
      emptyMessage="No teams have been created yet."
      resourceName="teams"
      summary="Team rosters, locations, and weekly movement goals."
      title="Teams"
    />
  )
}

export default Teams
