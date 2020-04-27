import React, { Fragment, Component } from 'react'
import style from './style.scss'
import userImage1 from '@/assets/images/user-image-1.png'
import { NavLink } from 'react-router-dom'
import { Pagination } from './Pagination'
import { connect } from 'react-redux'
import { GlobalStateType } from '@/store/index'

function mapStateToProps(state: GlobalStateType) {
  return {
    pages: state.botSubscribersReducer.pages,
    totalPages: state.botSubscribersReducer.totalPages,
    botIsSelected: state.botSubscribersReducer.botIsSelected,
  }
}

type BotUserListPropType = ReturnType<typeof mapStateToProps>
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

  render() {
    const subscriberList = this.props.pages.get(this.state.currentPage)

    if (!this.props.botIsSelected)
      return <div className={style.userlistTitle}>Укажите бота в поисковом запросе</div>
    else
      return (
        <Fragment>
          <div className={style.userlistTitle}>Пользователи текущего бота</div>
          <ul className={style.userList}>
            {subscriberList &&
              subscriberList?.map((item, index) => (
                <li key={index}>
                  <img src={userImage1} />
                  <NavLink className={style.userLink} to="/">
                    Userfirstname userlastname
                  </NavLink>
                </li>
              ))}
          </ul>
          <Pagination
            clickToPageHandler={(page) => this.setState({ currentPage: page })}
            currentPage={this.state.currentPage}
            totalPages={this.props.totalPages}
          />
        </Fragment>
      )
  }
}

const BotUserListContainer = connect(mapStateToProps)(BotUserList)

export { BotUserListContainer }
