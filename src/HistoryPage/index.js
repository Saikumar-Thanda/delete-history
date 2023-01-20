import {Component} from 'react'
import HistoryListItem from '../HistoryList'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryPage extends Component {
  state = {searchInput: '', HistoryList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {HistoryList} = this.state
    const filteredList = HistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({HistoryList: filteredList})
  }

  render() {
    const {searchInput, HistoryList} = this.state
    const searchResults = HistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="history-page-container">
          <div className="header-search-container">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo-img"
            />
            <div className="search-container">
              <div className="search-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-img"
                />
              </div>
              <input
                type="search"
                className="input-container"
                onChange={this.onChangeSearchInput}
                placeholder="Search History"
              />
            </div>
          </div>
          <div className="footer-page-container">
            {searchResults.length >= 1 && (
              <ul className="history-lists">
                {searchResults.map(eachItem => (
                  <HistoryListItem
                    historyDetails={eachItem}
                    key={eachItem.id}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            )}
            {searchResults.length === 0 && <p>There is no history to show</p>}
          </div>
        </div>
      </div>
    )
  }
}
// https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png alt should be app logo
// https://assets.ccbp.in/frontend/react-js/search-img.png alt should be search
// https://assets.ccbp.in/frontend/react-js/delete-img.png alt should be delete

export default HistoryPage
