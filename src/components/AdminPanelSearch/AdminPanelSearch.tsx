import React, { Component, Fragment, PropsWithChildren, createRef } from 'react'
// import style from './style.scss'

export class AdminPanelSearch extends Component<PropsWithChildren<{}>> {
  /**
   * Ref to search input
   */
  private searchNodeRef = createRef<HTMLInputElement>()

  render() {
    return (
      <Fragment>
        <h1>Search panel</h1>
      </Fragment>
    )
  }
}
