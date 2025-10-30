import {AbsoluteFill, Img, staticFile, useVideoConfig, Video} from "remotion";
import {jobs} from "./jobs";
import {QRCodeCanvas} from "qrcode.react";
import {flip} from "@remotion/transitions/flip";
import {linearTiming, TransitionSeries} from "@remotion/transitions";

export const JobWall: React.FC<void> = () => {
  const {fps, width, height} = useVideoConfig();

  const durationPerUrl = fps * 8; // seconds per qr code

  return (
    <AbsoluteFill style={{backgroundColor: "#000000"}}>
      <TransitionSeries>
        {jobs.reverse().flatMap(({title, url, logoUrl, bgColor}, index) => (
          [
            <TransitionSeries.Sequence key={title} durationInFrames={durationPerUrl}>
              <AbsoluteFill style={{backgroundColor: bgColor, color: findFg(bgColor)}}>
                <Img
                  style={{
                    position: "absolute",
                    width: "300px",
                    top: "25px",
                    right: "25px"
                  }}
                  src={logoUrl.startsWith('http') ? logoUrl : staticFile(logoUrl)}
                  alt="company logo"
                />
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '100%'}}>
                    <QRCodeCanvas
                      style={{margin: '50px auto'}} 
                      value={url}
                      size={Math.min(width, height) / 2}
                      fgColor={findFg(bgColor)}
                      bgColor={bgColor}
                    />
                  </div>
                  <h2 style={{marginTop: '20px', fontSize: '6em'}}>{title}</h2>
                </div>
              </AbsoluteFill>
            </TransitionSeries.Sequence>,
            <TransitionSeries.Transition
              presentation={flip()}
              timing={linearTiming({durationInFrames: 30})}
            />
          ]
        ))}
        <TransitionSeries.Sequence durationInFrames={durationPerUrl}>
          <Video src={staticFile("cyon.mp4")}/>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  )
};

function findFg(bgColor: string): string {
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
}