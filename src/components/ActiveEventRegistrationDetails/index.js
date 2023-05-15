// Write your code here
import './index.css'

const activeStatus = {
  yet_to_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrations_closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const activeYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt=" yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const activeRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const activeRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActive = () => {
    switch (activeRegistrationStatus) {
      case activeStatus.yet_to_register:
        return activeYetToRegisterView()
      case activeStatus.registered:
        return activeRegisteredView()
      case activeStatus.registrations_closed:
        return activeRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }
  return <div className="events">{renderActive()}</div>
}
export default ActiveEventRegistrationDetails
