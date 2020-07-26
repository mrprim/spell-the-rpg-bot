const sessions = {}

const getSession = id => sessions[id]

const getSessions = () => sessions

const setSession = (id, session) => {
  sessions[id] = session
}

const endSession = id => setSession(id, undefined)

module.exports = {
  getSessions,
  getSession,
  setSession,
  endSession
}
