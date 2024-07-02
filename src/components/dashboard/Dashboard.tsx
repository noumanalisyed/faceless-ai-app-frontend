import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ImgRightSvgIcon } from './ImgRightSvgIcon';
import { ImgSearchSvgIcon } from './ImgSearchSvgIcon';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';
import { SvgIcon5 } from './SvgIcon5';
import { SvgIcon6 } from './SvgIcon6';
import { SvgIcon7 } from './SvgIcon7';
import { SvgIcon8 } from './SvgIcon8';
import { SvgIcon9 } from './SvgIcon9';
import { SvgIcon10 } from './SvgIcon10';
import classes from './Dashboard.module.css';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 17:45 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background}>
        <div className={classes.background2}>
          <div className={classes.container}>
            <div className={classes.container2}>
              <div className={classes.container3}>
                <div className={classes.container4}>
                  <div className={classes.container5}>
                    <div className={classes.container6}>
                      <div className={classes.letSCreateSomeVideos}>Let&#39;s create some videos!</div>
                    </div>
                    <div className={classes.container7}>
                      <div className={classes.container8}>
                        <div className={classes.margin}>
                          <div className={classes.backgroundBorder}>
                            <div className={classes.free}>free</div>
                          </div>
                        </div>
                        <div className={classes.margin2}>
                          <div className={classes.backgroundBorder2}>
                            <div className={classes.renewalDate3072024}>renewal date: 30/07/2024</div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.backgroundBorder3}>
                        <div className={classes.Credits}>0 credits</div>
                      </div>
                      <div className={classes.link}>
                        <div className={classes.viewHistory}>
                          <a
                            href='https://vsub.io/workspace/79769/account-settings'
                            target='_blank'
                            rel='noreferrer'
                            className={classes.textBlock}
                          >
                            View history
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className={classes.button}>
                      <div className={classes.topUp}>Top up</div>
                    </button>
                  </div>
                  <div className={classes.container9}>
                    <div className={classes.overlay}>
                      <div className={classes.button2}>
                        <div className={classes.container10}>
                          <div className={classes.imgRightSVG}>
                            <ImgRightSvgIcon className={classes.icon} />
                          </div>
                        </div>
                        <div className={classes.container11}>
                          <div className={classes.vsubUpdates}>Vsub updates </div>
                          <div className={classes.container12}>
                            <div className={classes.superscript}>
                              <div className={classes._1}>1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.alert}>
                      <div className={classes.container13}>
                        <div className={classes.container14}>
                          <div className={classes.EarnMoneyForLifeWith}>💸 Earn money for life with </div>
                          <div className={classes.link2}>
                            <div className={classes.vsubAffiliateProgram}>
                              <a
                                href='https://vsub.io/affiliate'
                                target='_blank'
                                rel='noreferrer'
                                className={classes.textBlock2}
                              >
                                Vsub affiliate program
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.alert2}>
                      <div className={classes.container15}>
                        <div className={classes.container16}>
                          <div className={classes.Buy}>️ Buy </div>
                          <div className={classes.link3}>
                            <div className={classes.uSTikTokAccounts}>
                              <a
                                href='https://tikaccounts.com/ethan'
                                target='_blank'
                                rel='noreferrer'
                                className={classes.textBlock3}
                              >
                                US TikTok accounts
                              </a>
                            </div>
                          </div>
                          <div className={classes.UseCodeETHANFor}>(use code ETHAN for 😘)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.container17}>
                      <Link to='/FakeText' className={classes.textBlock4}>
                  <div className={classes.backgroundBorderShadow}>
                    <div className={classes.container18}>
                      <div className={classes.imgMessage}>
                        <div className={classes.sVG}>
                          <SvgIcon className={classes.icon2} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container19}>
                      <div className={classes.container20}>
                        <div className={classes.fakeText}>Fake Text </div>
                        <div className={classes.backgroundBorder4}>
                          <div className={classes.bestNiche}>best niche</div>
                        </div>
                      </div>
                      <div className={classes.container21}>
                        <div className={classes.fakeTextMessageStory}>Fake text message story</div>
                      </div>
                    </div>
                  </div>
                      </Link>
                      <Link to='/AIstory' className={classes.textBlock4}>
                  <div className={classes.backgroundBorderShadow2}>
                    <div className={classes.container22}>
                      <div className={classes.imgDeploymentUnit}>
                        <div className={classes.sVG2}>
                          <SvgIcon2 className={classes.icon3} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container23}>
                      <div className={classes.container24}>
                        <div className={classes.aIVideo}>AI Video</div>
                      </div>
                      <div className={classes.container25}>
                        <div className={classes.generateAIVideo}>Generate AI video</div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className={classes.backgroundBorderShadow3}>
                    <div className={classes.container26}>
                      <div className={classes.imgQuestionCircle}>
                        <div className={classes.sVG3}>
                          <SvgIcon3 className={classes.icon4} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container27}>
                      <div className={classes.container28}>
                        <div className={classes.quiz}>Quiz</div>
                      </div>
                      <div className={classes.container29}>
                        <div className={classes.quizQuestionsVideo}>Quiz questions video</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.backgroundBorderShadow4}>
                    <div className={classes.container30}>
                      <div className={classes.imgBook}>
                        <div className={classes.sVG4}>
                          <SvgIcon4 className={classes.icon5} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container31}>
                      <div className={classes.container32}>
                        <div className={classes.story}>Story</div>
                      </div>
                      <div className={classes.container33}>
                        <div className={classes.storyVideo}>Story video</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.backgroundBorderShadow5}>
                    <div className={classes.container34}>
                      <div className={classes.imgReddit}>
                        <div className={classes.sVG5}>
                          <SvgIcon5 className={classes.icon6} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container35}>
                      <div className={classes.container36}>
                        <div className={classes.redditStory}>Reddit story</div>
                      </div>
                      <div className={classes.container37}>
                        <div className={classes.convertRedditPostToVideo}>Convert Reddit post to video</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.backgroundBorderShadow6}>
                    <div className={classes.container38}>
                      <div className={classes.imgPlaySquare}>
                        <div className={classes.sVG6}>
                          <SvgIcon6 className={classes.icon7} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container39}>
                      <div className={classes.container40}>
                        <div className={classes.addCaptions}>Add Captions</div>
                      </div>
                      <div className={classes.container41}>
                        <div className={classes.autoCaptionsVideo}>Auto captions video</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.backgroundBorderShadow7}>
                    <div className={classes.container42}>
                      <div className={classes.imgSplitCells}>
                        <div className={classes.sVG7}>
                          <SvgIcon7 className={classes.icon8} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.container43}>
                      <div className={classes.container44}>
                        <div className={classes.wouldYouRather}>Would You Rather</div>
                      </div>
                      <div className={classes.container45}>
                        <div className={classes.wouldYouRatherVideo}>Would You Rather video</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.container46}>
                  <div className={classes.link4}>
                    <div className={classes.helpUsImproveVsubByGivingFeedb}>
                      <a
                        href='https://vsub.featurebase.app/'
                        target='_blank'
                        rel='noreferrer'
                        className={classes.textBlock4}
                      >
                        Help us improve Vsub by giving feedback →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.container47}>
                <div className={classes.container48}>
                  <div className={classes.navOrderedList}>
                    <div className={classes.item}>
                      <div className={classes.link5}>
                        <div className={classes.myFiles}>My Files</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.container49}>
                    <div className={classes.container50}>
                      <div className={classes.backgroundBorder5}>
                        <div className={classes.margin3}>
                          <div className={classes.container51}>
                            <div className={classes.imgSearchSVG}>
                              <ImgSearchSvgIcon className={classes.icon9} />
                            </div>
                          </div>
                        </div>
                        <div className={classes.input}>
                          <div className={classes.container52}>
                            <div className={classes.search}>Search</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.container53}>
                      <div className={classes.container54}>
                        <button className={classes.button3}>
                          <div className={classes.container55}>
                            <div className={classes.imgFolderAdd}>
                              <div className={classes.sVG8}>
                                <SvgIcon8 className={classes.icon10} />
                              </div>
                            </div>
                          </div>
                          <div className={classes.newFolder}>New folder</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.backgroundBorder6}>
                  <div className={classes.background3}>
                    <div className={classes.table}>
                      <div className={classes.headerRow}>
                        <div className={classes.cell}>
                          <div className={classes.container56}>
                            <div className={classes.label}>
                              <div className={classes.overlayBorder}></div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.cellName}>
                          <div className={classes.verticalDivider}></div>
                          <div className={classes.container57}>
                            <div className={classes.container58}>
                              <div className={classes.name}>Name</div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.cell2}>
                          <div className={classes.verticalDivider2}></div>
                          <div className={classes.status}>Status</div>
                        </div>
                        <div className={classes.cellCreated}>
                          <div className={classes.verticalDivider3}></div>
                          <div className={classes.container59}>
                            <div className={classes.container60}>
                              <div className={classes.created}>Created</div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.cell3}></div>
                      </div>
                      <div className={classes.bodyRow}>
                        <div className={classes.data}>
                          <div className={classes.container61}>
                            <div className={classes.container62}>
                              <div className={classes.sVG9}>
                                <SvgIcon9 className={classes.icon11} />
                              </div>
                            </div>
                            <div className={classes.container63}>
                              <div className={classes.noData}>No data</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backgroundHorizontalBorder}>
        <div className={classes.header}>
          <div className={classes.link6}>
            <div className={classes.logoWhite2Png}></div>
          </div>
          <div className={classes.container64}>
            <div className={classes.container65}>
              <div className={classes.link7}>
                <div className={classes.files}>Files</div>
              </div>
            </div>
            <div className={classes.container66}>
              <div className={classes.link8}>
                <div className={classes.pricing}>
                  <a
                    href='https://vsub.io/workspace/79769/billing'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock5}
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container67}>
              <div className={classes.link9}>
                <div className={classes.container68}>
                  <div className={classes.community}>
                    <a
                      href='https://discord.gg/rvd4Hayeay'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.textBlock6}
                    >
                      Community
                    </a>
                  </div>
                  <div className={classes.sVG10}>
                    <SvgIcon10 className={classes.icon12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.container69}>
            <div className={classes.link10}>
              <div className={classes.backgroundBorder7}>
                <div className={classes.upgrade}>
                  <a
                    href='https://vsub.io/workspace/79769/billing'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock7}
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container70}>
              <div className={classes.container71}>
                <div className={classes.background4}>
                  <div className={classes.container72}>
                    <div className={classes.r}>R</div>
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
