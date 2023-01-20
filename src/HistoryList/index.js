import './index.css'

const HistoryListItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, domainUrl, title, id} = historyDetails
  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-website">
        <img src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        testid="delete"
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
