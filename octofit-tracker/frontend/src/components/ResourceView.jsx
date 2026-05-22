import { useEffect, useMemo, useState } from 'react'

const getRows = (payload) => {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.data?.results)) {
    return payload.data.results
  }

  return []
}

const formatValue = (value) => {
  if (value === null || value === undefined) {
    return ''
  }

  if (value instanceof Date) {
    return value.toLocaleString()
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

function ResourceView({ endpoint, emptyMessage, resourceName, summary, title }) {
  const [payload, setPayload] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const loadResource = async () => {
      setError('')
      setLoading(true)

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const result = await response.json()

        if (active) {
          setPayload(result)
        }
      } catch (caughtError) {
        if (active) {
          setError(caughtError instanceof Error ? caughtError.message : 'Unable to load data')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadResource()

    return () => {
      active = false
    }
  }, [endpoint])

  const rows = useMemo(() => getRows(payload), [payload])
  const columns = useMemo(() => {
    const fieldNames = new Set()

    rows.forEach((row) => {
      Object.keys(row)
        .filter((fieldName) => fieldName !== '__v')
        .forEach((fieldName) => fieldNames.add(fieldName))
    })

    return Array.from(fieldNames)
  }, [rows])

  return (
    <section className="resource-panel" aria-labelledby={`${resourceName}-heading`}>
      <div className="resource-header">
        <div>
          <h1 id={`${resourceName}-heading`}>{title}</h1>
          <p>{summary}</p>
        </div>
        <span className="resource-count">{rows.length}</span>
      </div>

      <div className="endpoint-strip">{endpoint}</div>

      {loading && <div className="state-message">Loading {resourceName}...</div>}
      {error && <div className="state-message state-error">{error}</div>}
      {!loading && !error && rows.length === 0 && <div className="state-message">{emptyMessage}</div>}

      {!loading && !error && rows.length > 0 && (
        <div className="table-responsive resource-table-wrap">
          <table className="table table-hover align-middle resource-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row._id || `${resourceName}-${rowIndex}`}>
                  {columns.map((column) => (
                    <td key={column}>{formatValue(row[column])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceView
