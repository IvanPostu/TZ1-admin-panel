import React, { Component, createRef } from 'react'

type OutsideClickWrapperPropType = {
  outsideClickHandler: (ev: Event) => void
  handlerIsActive: boolean
}

export class OutsideClickWrapper extends Component<OutsideClickWrapperPropType> {
  /**
   * Set callback immutable
   */
  private readonly callback: (ev: Event) => void
  private eventIsAtached = false
  private node = createRef<HTMLDivElement>()

  constructor(props: OutsideClickWrapperPropType) {
    super(props)
    this.callback = this.props.outsideClickHandler
  }

  componentDidMount() {
    if (this.props.handlerIsActive) {
      this.attachEventListener(this.handleOutsideClick)
    }
  }

  componentDidUpdate() {
    if (this.props.handlerIsActive && !this.eventIsAtached) {
      this.attachEventListener(this.handleOutsideClick)
    } else if (!this.props.handlerIsActive && this.eventIsAtached) {
      this.detachEventListener(this.handleOutsideClick)
    }
  }

  /**
   * Вызов removeEventListener() с параметрами,
   * не соответствующими ни одному зарегистрированному
   * EventListener в EventTarget, не имеет никакого эффекта.
   * @link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener
   */
  componentWillUnmount() {
    if (this.eventIsAtached) {
      this.detachEventListener(this.callback)
    }
  }

  attachEventListener = (callback: (ev: Event) => void) => {
    this.eventIsAtached = true
    document.addEventListener('click', callback, false)
  }

  detachEventListener = (callback: (ev: Event) => void) => {
    this.eventIsAtached = false
    document.removeEventListener('click', callback, false)
  }

  handleOutsideClick = (e: Event) => {
    // ignore clicks on the component itself
    if (this.node.current?.contains(e.target as Node)) {
      return
    }

    this.callback(e)
  }

  // handleClick() {
  //   if (!this.state.popupVisible) {
  //     // attach/remove event handler
  //     document.addEventListener('click', this.handleOutsideClick, false)
  //   } else {
  //     document.removeEventListener('click', this.handleOutsideClick, false)
  //   }

  //   this.setState((prevState) => ({
  //     popupVisible: !prevState.popupVisible,
  //   }))
  // }

  render() {
    return (
      <div className="popover-container" ref={this.node}>
        {this.props.children}
      </div>
    )
  }
}
