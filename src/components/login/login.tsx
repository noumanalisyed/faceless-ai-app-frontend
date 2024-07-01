import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Login.module.css';
import { SvgIcon } from './SvgIcon';

interface Props {
  className?: string;
}
/* @figmaId 8:3 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container}></div>
      <div className={classes.container2}>
        <div className={classes.LoginShadow}>
          <div className={classes.container3}>
            <div className={classes.container4}>
              <div className={classes.container5}>
                <div className={classes.logoWhite2Png}></div>
              </div>
              <div className={classes.container6}>
                <div className={classes.LoginToGetUnlimitedAccessAndSa}>
                  Login to get unlimited access and save your files
                </div>
              </div>
              <div className={classes.container7}>
                <div className={classes.container8}>
                  <div className={classes.link}>
                    <button className={classes.button}>
                      <div className={classes.container9}>
                        <div className={classes.imgGoogle}>
                          <div className={classes.sVG}>
                            <SvgIcon className={classes.icon} />
                          </div>
                        </div>
                      </div>
                      <div className={classes.signInWithGoogle}>
                        <a
                          href='https://api.vsub.io/auth/google'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock}
                        >
                          Sign in with Google
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
                <div className={classes.container10}>
                  <button className={classes.button2}>
                    <div className={classes.signInWithEmailPassword}>Sign in with Email &amp; Password</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.alert}>
              <div className={classes.container11}>
                <div className={classes.container12}>
                  <div className={classes.weDonTHaveASignUpFormYourAccou}>
                    <div className={classes.textBlock2}>
                      We don&#39;t have a sign-up form. Your account is created automatically
                    </div>
                    <div className={classes.textBlock3}>when you log in with a Google account.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
