import React, { Component, Fragment, PropsWithChildren, createRef } from 'react'
import style from './style.scss'

export class AdminPanelSearch extends Component<PropsWithChildren<{}>> {
  /**
   * Ref to search input
   */
  private searchNodeRef = createRef<HTMLInputElement>()

  render() {
    return (
      <Fragment>
        <div className={style.q1}></div>
        <div className={style.q2}></div>
        <div>Search panel</div>
      </Fragment>
    )
  }
}
