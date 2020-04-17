import React, { PureComponent, PropsWithChildren } from 'react'

import { CategoriesInput } from '@/components/AdminPanelSearch/SearchForm/CategoriesInput'
import style from './style.scss'
import { SearchInput } from './SearchInput'

export class AdminPanelSearch extends PureComponent<PropsWithChildren<{}>> {
  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <SearchInput />
          <CategoriesInput />
        </div>
      </div>
    )
  }
}
