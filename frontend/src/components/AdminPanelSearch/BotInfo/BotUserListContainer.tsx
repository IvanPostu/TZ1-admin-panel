import React, { Fragment, Component } from 'react'
import style from './style.scss'
import { NavLink } from 'react-router-dom'
import { Pagination } from './Pagination'
import { connect } from 'react-redux'
import { GlobalStateType } from '@/store/index'
import { images, ImageType } from '@/components/GlobalImageComponent'
import { Dispatch, bindActionCreators } from 'redux'
import { fetchPage } from '@/store/BotSubscribers/actionCreators'
import { Loader } from '@/components/LoaderA/Loader'

function mapStateToProps(state: GlobalStateType) {
  return {
    pages: state.botSubscribersReducer.pages,
    totalPages: state.botSubscribersReducer.totalPages,
    botId: state.botReducer.id,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ fetchPage }, dispatch)
}

type BotUserListPropType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>
type BotUserListStateType = {
  currentPage: number
}

class BotUserList extends Component<BotUserListPropType, BotUserListStateType> {
  constructor(props: BotUserListPropType) {
    super(props)
    this.state = {
      currentPage: 1,
    }
  }

  componentDidUpdate(prevProps: BotUserListPropType) {
    if (prevProps.botId !== this.props.botId) {
      this.setState({ currentPage: 1 })
    }
  }

  clickToPageHandler = (page: number) => {
    if (!this.props.pages.has(page)) this.props.fetchPage(page - 1)
    this.setState({ currentPage: page })
  }

  render() {
    const subscriberList = this.props.pages.get(this.state.currentPage)

    if (this.props.botId === null)
      return <div className={style.userlistTitle}>Укажите бота в поисковом запросе</div>

    if (this.props.botId !== null && !subscriberList)
      return (
        <Fragment>
          <div className={style.userlistTitle}>Загрузка страницы...</div>
          <ul className={style.userList}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <li key={index}>
                <Loader />
              </li>
            ))}
          </ul>
        </Fragment>
      )

    return (
      <Fragment>
        <div className={style.userlistTitle}>Пользователи текущего бота</div>
        <ul className={style.userList}>
          {subscriberList?.map((item, index) => (
            <li key={index}>
              <img src={images.get(item.avatarFilename as ImageType)} />
              <NavLink className={style.userLink} to="/">
                {`${item.fullname} - age: ${item.age}`}
              </NavLink>
            </li>
          ))}
        </ul>
        <Pagination
          clickToPageHandler={this.clickToPageHandler}
          currentPage={this.state.currentPage}
          totalPages={this.props.totalPages}
        />
      </Fragment>
    )
  }
}

const BotUserListContainer = connect(mapStateToProps, mapDispatchToProps)(BotUserList)

export { BotUserListContainer }
