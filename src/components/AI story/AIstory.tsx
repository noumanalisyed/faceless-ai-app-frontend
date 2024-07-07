import {memo} from 'react';
import type { FC } from 'react';
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import resets from '../_resets.module.css';
import { ImgDownSvgIcon } from './ImgDownSvgIcon';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import classes from './AIstory.module.css';

interface Props {
  className?: string;
}

/* @figmaId 25:2 */
export const AIstory: FC<Props> = memo(function AIstory(props = {}) {
  const [prompt, setPrompt] = useState("");
    const [videoPath, setVideoPath] = useState("");

    const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPrompt(event.target.value);
  };

  const handleGenerateVideo = () => {
      axios.post('http://localhost:8080/api/generate_video', { prompt })
          .then(response => {
              console.log(response.data);
              setVideoPath(response.data);
          }).catch(error => {
          console.error('There was an error generating the video!', error);
      });
  };

  const handleFileUpload = () => {
      const formData = new FormData();
      formData.append('file', videoPath);

      axios.post('http://localhost:8080/api/upload_video', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      }).then(response => {
          console.log(response.data);
      }).catch(error => {
          console.error('There was an error uploading the file!', error);
      });
  };
    return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background}>
        <div className={classes.background2}>
          <div className={classes.container}>
            <div className={classes.container2}>
              <div className={classes.container3}>
                <div className={classes.createAIVideos}>Create AI videos</div>
              </div>
              <div className={classes.backgroundBorder}>
                <div className={classes.form}>
                  <div className={classes.container4}>
                    <div className={classes.container5}>
                      <div className={classes.container6}>
                        <div className={classes.label}>
                          <div className={classes.language}>Language</div>
                          <div className={classes.margin}>
                            <div className={classes.container7}>
                              <div className={classes.unnamed}>:</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.container8}>
                        <div className={classes.container9}>
                          <div className={classes.container10}>
                            <div className={classes.container11}>
                              <div className={classes.backgroundBorder2}>
                                <div className={classes.comboboxListbox}>
                                  <div className={classes.container12}>
                                    <div className={classes.container13}></div>
                                  </div>
                                </div>
                                <div className={classes.container14}>
                                  <div className={classes.english}>English</div>
                                </div>
                              </div>
                              <div className={classes.container15}>
                                <div className={classes.imgDownSVG}>
                                  <ImgDownSvgIcon className={classes.icon} />
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
              <div className={classes.backgroundBorder3}>
                <div className={classes.horizontalBorder}>
                  <div className={classes.container16}>
                    <div className={classes.templates}>Templates</div>
                  </div>
                </div>
                <div className={classes.container17}>
                  <div className={classes.border}>
                    <div className={classes.cinematicJpg}></div>
                    <div className={classes.overlay}>
                      <div className={classes.cinematic}>Cinematic</div>
                    </div>
                  </div>
                  <div className={classes.container18}>
                    <div className={classes.animeJpg}></div>
                    <div className={classes.overlay2}>
                      <div className={classes.anime}>Anime</div>
                    </div>
                  </div>
                  <div className={classes.container19}>
                    <div className={classes._3dJpg}></div>
                    <div className={classes.overlay3}>
                      <div className={classes.cartoon3D}>Cartoon (3D)</div>
                    </div>
                  </div>
                  <div className={classes.container20}>
                    <div className={classes.cinematicDarkJpg}></div>
                    <div className={classes.overlay4}>
                      <div className={classes.cinematicDark}>Cinematic (dark)</div>
                    </div>
                  </div>
                  <div className={classes.container21}>
                    <div className={classes.animeDarkJpg}></div>
                    <div className={classes.overlay5}>
                      <div className={classes.animeDark}>Anime (dark)</div>
                    </div>
                  </div>
                  <div className={classes.container22}>
                    <div className={classes.comicJpg}></div>
                    <div className={classes.overlay6}>
                      <div className={classes.comic}>Comic</div>
                    </div>
                  </div>
                  <div className={classes.container23}>
                    <div className={classes.cartoonJpg}></div>
                    <div className={classes.overlay7}>
                      <div className={classes.cartoon2D}>Cartoon (2D)</div>
                    </div>
                  </div>
                  <div className={classes.container24}>
                    <div className={classes.punkJpg}></div>
                    <div className={classes.overlay8}>
                      <div className={classes.solarpunk}>Solarpunk</div>
                    </div>
                  </div>
                  <div className={classes.container25}>
                    <div className={classes.psyJpg}></div>
                    <div className={classes.overlay9}>
                      <div className={classes.psychedelicArt}>Psychedelic art</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.backgroundBorder4}>
                <div className={classes.container26}>
                  <div className={classes.form2}>
                    <div className={classes.tablistMargin}>
                      <div className={classes.tablist}>
                        <div className={classes.horizontalDivider}></div>
                        <div className={classes.container27}>
                          <div className={classes.container28}>
                            <div className={classes.container29}>
                              <div className={classes.tab}>
                                <div className={classes.transcript}>Transcript</div>
                              </div>
                            </div>
                            <div className={classes.margin2}>
                              <div className={classes.container30}>
                                <div className={classes.tab2}>
                                  <div className={classes.settings}>Settings</div>
                                </div>
                              </div>
                            </div>
                            <div className={classes.margin3}>
                              <div className={classes.container31}>
                                <div className={classes.tab3}>
                                  <div className={classes.scriptGenerator}>Script generator</div>
                                </div>
                              </div>
                            </div>
                            <div className={classes.horizontalDivider2}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.container32}>
                      <div className={classes.tabpanel}>
                        <div className={classes.container33}>
                          <div className={classes.container34}>
                            <div className={classes.labelVideoType}>Video type</div>
                          </div>
                          <div className={classes.container35}>
                            <div className={classes.container36}>
                              <div className={classes.container37}>
                                <div className={classes.label2}>
                                  <div className={classes.backgroundBorder5}>
                                    <div className={classes.background3}></div>
                                  </div>
                                  <div className={classes.container38}>
                                    <div className={classes.standard}>Standard</div>
                                  </div>
                                </div>
                                <div className={classes.label3}>
                                  <div className={classes.backgroundBorder6}></div>
                                  <div className={classes.container39}>
                                    <div className={classes.musicVideo}>Music video</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.container40}>
                          <div className={classes.container41}>
                            <div className={classes.label4}>
                              <div className={classes.container42}>
                                <div className={classes.container43}>
                                  <div className={classes.transcriptMax8000CharactersTot}>
                                    Transcript (Max 8000 characters) (Total 0 characters)
                                  </div>
                                </div>
                                <button className={classes.button}>
                                <button className={classes.generateScript} onClick={handleGenerateVideo}>Generate Video</button>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className={classes.container44}>
                            <div className={classes.container45}>
                              <div className={classes.container46}>
                              <input className={classes.textarea} value={prompt} onChange={handlePromptChange} placeholder="Enter video prompt"></input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.container47}>
                          <div className={classes.container48}>
                            <div className={classes.labelOrUseAudioFile}>Or use audio file</div>
                          </div>
                          <div className={classes.container49}>
                            <div className={classes.container50}>
                              <div className={classes.container51}>
                                <div className={classes.container52}>
                                  <div className={classes.container53}>
                                    <button className={classes.button2}>
                                      <div className={classes.imgUpload}>
                                        <div className={classes.sVG}>
                                          <SvgIcon className={classes.icon2} />
                                        </div>
                                      </div>
                                      <div className={classes.uploadAudio}>Upload audio</div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.container54}>
                          <div className={classes.container55}>
                            <div className={classes.label5}>
                              <div className={classes.container56}>
                                <div className={classes.provideAdditionalContextForIma}>
                                  Provide additional context for image generation
                                </div>
                                <div className={classes.button3}>
                                  <div className={classes.imgQuestionCircle}>
                                    <div className={classes.sVG2}>
                                      <SvgIcon2 className={classes.icon3} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.container57}>
                            <div className={classes.container58}>
                              <div className={classes.container59}>
                                <input className={classes.input} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.container60}>
                    <button className={classes.button4}>
                      <div className={classes.continue}>Continue</div>
                    </button>
                  </div>
                  <div className={classes.backgroundBorder4}>
                  <video src='http://localhost:5500/generated_video.mp4' controls></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backgroundHorizontalBorder}>
        <div className={classes.header}>
          <div className={classes.link}>
            <div className={classes.logoWhite2Png}></div>
          </div>
          <div className={classes.container61}>
            <div className={classes.container62}>
              <div className={classes.link2}>
                <div className={classes.files}>
                  <a
                    href='https://vsub.io/workspace/76847'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock}
                  >
                    Files
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container63}>
              <div className={classes.link3}>
                <div className={classes.pricing}>
                  <a
                    href='https://vsub.io/workspace/76847/billing'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock2}
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.container64}>
              <div className={classes.link4}>
                <div className={classes.container65}>
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
                  <div className={classes.sVG3}>
                    <SvgIcon3 className={classes.icon4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.container66}>
            <div className={classes.container67}>
              <div className={classes.container68}>
                <div className={classes.background4}>
                  <div className={classes.container69}>
                    <div className={classes.d}>D</div>
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
