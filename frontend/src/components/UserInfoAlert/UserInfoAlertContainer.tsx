import React, { FC, Fragment } from 'react'
import style from './style.scss'
import { ImageType, images } from '@/components/GlobalImageComponent'
import { Loader } from '@/components/LoaderA/Loader'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { GlobalStateType } from '@/store'
import { showOrHideUserInfo } from '@/store/User/actionCreators'

const Loading: FC = () => (
  <div id={style.alertBody}>
    <div className={style.centered}>
      <Loader size="70px" />
    </div>
  </div>
)

function mapStateToProps(state: GlobalStateType) {
  return {
    userState: state.userReducer,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ showOrHideUserInfo }, dispatch)
}

type UserInfoAlertPropType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const UserInfoAlert: FC<UserInfoAlertPropType> = ({ userState, showOrHideUserInfo }) => {
  if (!userState.isShowed) return <Fragment />
  if (userState.isLoading) return <Loading />

  const { fullname, age, email, subscriptionCount, avatarFilename } = userState

  return (
    <div id={style.alertBody}>
      <img src={images.get(avatarFilename as ImageType)} />
      <p>
        <b>Имя:</b> {fullname}
      </p>
      <p>
        <b>Возраст:</b> {age}
      </p>
      <p>
        <b>Эл. Почта:</b> {email}
      </p>
      <p>
        <b>Подписок:</b> {subscriptionCount}
      </p>
      <br />
      <button onClick={() => showOrHideUserInfo(false)} className={style.close}>
        Закрыть
      </button>
    </div>
  )
}

export const UserInfoAlertContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoAlert)
