import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GlobalStateType } from '@/store/index'
import { Dispatch, bindActionCreators } from 'redux'
import { fetchPage, setCurrentPage } from '@/store/BotSubscribers/actionCreators'
import { SubscriberType } from '@/store/BotSubscribers/types'
import { BotIsNotDefined, ListIsLoading, PagesIsZero, SubscriberList } from './ListFragments'

function mapStateToProps(state: GlobalStateType) {
  return {
    pages: state.botSubscribersReducer.pages,
    totalPages: state.botSubscribersReducer.totalPages,
    botId: state.botReducer.id,
    currentPage: state.botSubscribersReducer.currentPage,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ fetchPage, setCurrentPage }, dispatch)
}

type BotUserListPropType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class BotUserList extends Component<BotUserListPropType> {
  constructor(props: BotUserListPropType) {
    super(props)
  }

  componentDidUpdate(prevProps: BotUserListPropType) {
    if (prevProps.botId !== this.props.botId) {
      this.props.setCurrentPage(1)
    }
  }

  clickToPageHandler = (page: number) => {
    if (!this.props.pages.has(page)) {
      this.props.fetchPage(page - 1)
    }
    this.props.setCurrentPage(page)
  }

  render() {
    const subscriberList: Array<SubscriberType> = this.props.pages.get(
      this.props.currentPage,
    ) as Array<SubscriberType>
    const listIsLoaded: boolean = this.props.pages.has(this.props.currentPage)
    const botIsSelected: boolean = this.props.botId !== null
    const pagesIsZero: boolean = this.props.totalPages === 0

    if (!botIsSelected) {
      return <BotIsNotDefined />
    }

    if (botIsSelected && !listIsLoaded) {
      return <ListIsLoading />
    }

    if (pagesIsZero) {
      return <PagesIsZero />
    }

    return (
      <SubscriberList
        clickToPageHandler={this.clickToPageHandler}
        totalPages={this.props.totalPages}
        currentPage={this.props.currentPage}
        subscriberList={subscriberList}
      />
    )
  }
}

const BotUserListContainer = connect(mapStateToProps, mapDispatchToProps)(BotUserList)

export { BotUserListContainer }
