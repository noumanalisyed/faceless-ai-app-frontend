import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';
import { SvgIcon5 } from './SvgIcon5';
import { SvgIcon6 } from './SvgIcon6';
import { SvgIcon7 } from './SvgIcon7';
import classes from './FakeText.module.css';

interface Props {
  className?: string;
}
/* @figmaId 23:323 */
export const FakeText: FC<Props> = memo(function FakeText(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background}>
        <div className={classes.background2}>
          <div className={classes.container}>
            <div className={classes.container2}>
              <div className={classes.container3}>
                <div className={classes.createFakeTextMessageStoryVide}>
                  Create &quot;Fake text message story&quot; video
                </div>
              </div>
              <div className={classes.alert}>
                <div className={classes.container4}>
                  <div className={classes.container5}>
                    <div className={classes.tipUseUppercaseTextOrPunctuati}>
                      Tip: Use uppercase text or punctuation marks to change the voice pitch. 
                    </div>
                    <div className={classes.link}>
                      <div className={classes.learnMore}>
                        <a
                          href='https://elevenlabs.io/docs/speech-synthesis/prompting#emotion'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock}
                        >
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.container6}>
                <div className={classes.backgroundBorder}>
                  <div className={classes.horizontalBorder}>
                    <div className={classes.container7}>
                      <div className={classes.container8}>
                        <div className={classes.container9}>
                          <div className={classes.conversation1}>Conversation #1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.container10}>
                    <div className={classes.container11}>
                      <div className={classes.tablistMargin}>
                        <div className={classes.tablist}>
                          <div className={classes.horizontalDivider}></div>
                          <div className={classes.container12}>
                            <div className={classes.container13}>
                              <div className={classes.container14}>
                                <div className={classes.tab}>
                                  <div className={classes.messages}>Messages</div>
                                </div>
                              </div>
                              <div className={classes.margin}>
                                <div className={classes.container15}>
                                  <div className={classes.tab2}>
                                    <div className={classes.settings}>Settings</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.margin2}>
                                <div className={classes.container16}>
                                  <div className={classes.tab3}>
                                    <div className={classes.templates}>Templates</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.margin3}>
                                <div className={classes.container17}>
                                  <div className={classes.tab4}>
                                    <div className={classes.language}>Language</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.margin4}>
                                <div className={classes.container18}>
                                  <div className={classes.tab5}>
                                    <div className={classes.scriptGenerator}>Script generator</div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.horizontalDivider2}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.container19}>
                        <div className={classes.tabpanel}>
                          <div className={classes.container20}>
                            <div className={classes.container21}>
                              <div className={classes.container22}>
                                <div className={classes.container23}>
                                  <button className={classes.button}>
                                    <div className={classes.import}>Import</div>
                                  </button>
                                </div>
                              </div>
                              <div className={classes.container24}>
                                <button className={classes.button2}>
                                  <div className={classes.generateScript}>Generate script</div>
                                </button>
                              </div>
                              <div className={classes.container25}>
                                <button className={classes.button3}>
                                  <div className={classes.swap}>Swap</div>
                                </button>
                              </div>
                              <div className={classes.container26}>
                                <button className={classes.button4}>
                                  <div className={classes.useSampleData}>Use sample data</div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className={classes.background3}>
                            <div className={classes.table}>
                              <div className={classes.headerRow}>
                                <div className={classes.cell}>
                                  <div className={classes.verticalDivider}></div>
                                </div>
                                <div className={classes.cell2}>
                                  <div className={classes.verticalDivider2}></div>
                                  <div className={classes.type}>Type</div>
                                </div>
                                <div className={classes.cell3}>
                                  <div className={classes.verticalDivider3}></div>
                                  <div className={classes.content}>Content</div>
                                </div>
                                <div className={classes.cell4}></div>
                              </div>
                              <div className={classes.bodyRow}>
                                <div className={classes.data}>
                                  <div className={classes.container27}>
                                    <div className={classes.startByAddingMessages}>Start by adding messages</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.container28}>
                            <button className={classes.button5}>
                              <div className={classes.container29}>
                                <div className={classes.imgDelete}>
                                  <div className={classes.sVG}>
                                    <SvgIcon className={classes.icon} />
                                  </div>
                                </div>
                              </div>
                              <div className={classes.clear}>Clear</div>
                            </button>
                            <button className={classes.button6}>
                              <div className={classes.container30}>
                                <div className={classes.imgPlus}>
                                  <div className={classes.sVG2}>
                                    <SvgIcon2 className={classes.icon2} />
                                  </div>
                                </div>
                              </div>
                              <div className={classes.addRizz}>Add Rizz</div>
                            </button>
                            <button className={classes.button7}>
                              <div className={classes.container31}>
                                <div className={classes.imgPlus2}>
                                  <div className={classes.sVG3}>
                                    <SvgIcon3 className={classes.icon3} />
                                  </div>
                                </div>
                              </div>
                              <div className={classes.addLeft}>Add left</div>
                            </button>
                            <button className={classes.button8}>
                              <div className={classes.container32}>
                                <div className={classes.imgPlus3}>
                                  <div className={classes.sVG4}>
                                    <SvgIcon4 className={classes.icon4} />
                                  </div>
                                </div>
                              </div>
                              <div className={classes.addRight}>Add right</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.backgroundBorder2}>
                  <div className={classes.horizontalBorder2}>
                    <div className={classes.container33}>
                      <div className={classes.messagesPreview}>Messages preview</div>
                    </div>
                  </div>
                  <div className={classes.background4}>
                    <div className={classes.background5}>
                      <div className={classes.container34}>
                        <div className={classes.u}>U</div>
                      </div>
                    </div>
                    <div className={classes.container35}>
                      <div className={classes.cameraIconePng}></div>
                    </div>
                    <div className={classes.container36}>
                      <div className={classes.iphoneArrowPng}></div>
                    </div>
                    <div className={classes.margin5}>
                      <div className={classes.container37}>
                        <div className={classes.unknown}>Unknown</div>
                        <div className={classes.flecheCallPng}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.container38}>
                <div className={classes.container39}>
                  <div className={classes.container40}>
                    <button className={classes.button9}>
                      <div className={classes.container41}>
                        <div className={classes.imgPlus4}>
                          <div className={classes.sVG5}>
                            <SvgIcon5 className={classes.icon5} />
                          </div>
                        </div>
                      </div>
                      <div className={classes.addConversation}>Add conversation</div>
                    </button>
                  </div>
                  <div className={classes.container42}>
                    <button className={classes.button10}>
                      <div className={classes.container43}>
                        <div className={classes.imgThunderbolt}>
                          <div className={classes.sVG6}>
                            <SvgIcon6 className={classes.icon6} />
                          </div>
                        </div>
                      </div>
                      <div className={classes.createVideo}>Create video</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backgroundHorizontalBorder}>
        <div className={classes.header}>
          <div className={classes.link2}>
            <div className={classes.logoWhite2Png}></div>
          </div>
          <div className={classes.container44}>
            <div className={classes.container45}>
              <div className={classes.link3}>
                <div className={classes.files}>Files</div>
              </div>
            </div>
            <div className={classes.container46}>
              <div className={classes.link4}>
                <div className={classes.pricing}>
                  <a
                    href='https://vsub.io/workspace/79769/billing'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock2}
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container47}>
              <div className={classes.link5}>
                <div className={classes.container48}>
                  <div className={classes.community}>
                    <a
                      href='https://discord.gg/rvd4Hayeay'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.textBlock3}
                    >
                      Community
                    </a>
                  </div>
                  <div className={classes.sVG7}>
                    <SvgIcon7 className={classes.icon7} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.container49}>
            <div className={classes.link6}>
              <div className={classes.backgroundBorder3}>
                <div className={classes.upgrade}>
                  <a
                    href='https://vsub.io/workspace/79769/billing'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock4}
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container50}>
              <div className={classes.container51}>
                <div className={classes.background6}>
                  <div className={classes.container52}>
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
