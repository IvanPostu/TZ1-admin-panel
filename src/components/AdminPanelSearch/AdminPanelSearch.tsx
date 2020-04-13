import React, { Component, Fragment, PropsWithChildren, createRef } from 'react'
import {
  MType,
  AutocompleteOptions,
  AutocompleteInstanceType,
} from '@/utils/MaterializecssDummyTypes'

/**
 * Materialize autocomplite types
 */
declare const M: MType

type LocalStateType = {
  autocompleteInstance: AutocompleteInstanceType
}

export class AdminPanelSearch extends Component<PropsWithChildren<{}>, LocalStateType> {
  /**
   * Ref to search input
   */
  private searchNodeRef = createRef<HTMLInputElement>()

  constructor(props: PropsWithChildren<{}>) {
    super(props)

    this.state = {
      autocompleteInstance: {},
    } as LocalStateType
  }

  componentDidMount() {
    const autocompleteOptions: AutocompleteOptions = {
      minLength: 3,
      onAutocomplete: this.onAutocompleteClick,
      data: {
        Apple: '',
        Microsoft: '',
        Google: 'https://placehold.it/250x250',
      },
    }

    this.setState({
      autocompleteInstance: M.Autocomplete.init(
        this.searchNodeRef.current as HTMLInputElement,
        autocompleteOptions,
      ),
    })
  }

  componentWillUnmount() {
    this.state.autocompleteInstance.destroy()
  }

  /**
   * Callback when on autocomplete variant click
   */
  onAutocompleteClick = (element: string) => {
    console.log(element)
  }

  render() {
    return (
      <Fragment>
        <div className="row mt-1">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                {/* <i className="material-icons prefix">textsms</i> */}
                <input
                  type="text"
                  id="autocomplete-input"
                  ref={this.searchNodeRef}
                  className="autocomplete"
                />
                <label htmlFor="autocomplete-input">Поиск</label>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
