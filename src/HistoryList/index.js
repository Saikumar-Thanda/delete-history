import './index.css'

const HistoryListItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {timeAccessed, logoUrl, domainUrl, title, id} = historyDetails
  const onClickDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        className="button"
        type="button"
        id="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryListItem
