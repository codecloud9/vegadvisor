import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toggleAuthorized } from '../../redux/actions/loginActions';
import cn from 'classnames';
import styles from './buttons.module.css';

interface IProps {
  isSearch: boolean;
}

function Buttons({ isSearch }: IProps) {
  const { authorized } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();

  function logout() {
    authorized && dispatch(toggleAuthorized());
    delete window.localStorage.access_token;
  }

  return (
    <div>
      {authorized ? (
        <div>
          <div className="buttonLeft">
            <Link href="/user-dashboard">
              <button
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
                })}>
                Dashboard
              </button>
            </Link>
          </div>
          <div className="buttonRight">
            <button
              className={cn({
                [styles.small]: isSearch,
                [styles.big]: !isSearch,
              })}
              onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="buttonLeft">
            <Link href="/login-register">
              <button
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
                })}>
                Login
              </button>
            </Link>
          </div>
          <div className="buttonRight">
            <Link href="/login-register">
              <button
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
                })}>
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
