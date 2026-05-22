import ResourceView from './ResourceView'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceView
      endpoint={leaderboardEndpoint}
      emptyMessage="No leaderboard entries are available yet."
      resourceName="leaderboard"
      summary="Current rankings across athletes and teams."
      title="Leaderboard"
    />
  )
}

export default Leaderboard
