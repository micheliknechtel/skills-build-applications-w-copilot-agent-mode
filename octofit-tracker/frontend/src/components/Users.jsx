import ResourceView from './ResourceView'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceView
      endpoint={usersEndpoint}
      emptyMessage="No users have been added yet."
      resourceName="users"
      summary="Profiles, preferred activities, and team assignments for OctoFit members."
      title="Users"
    />
  )
}

export default Users
