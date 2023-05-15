// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onsetEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const onsetEvents = () => {
    onsetEvent(id)
  }

  return (
    <li className="event-container">
      <button type="button" className="button" onClick={onsetEvents}>
        <img src={imageUrl} alt={name} className="eventImage" />
      </button>
      <h1 className="dance-name">{name}</h1>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
