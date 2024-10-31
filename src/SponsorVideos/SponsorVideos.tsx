import {AbsoluteFill, Sequence, staticFile, useVideoConfig, Video} from "remotion";

export const sponsorVideoData = ['eh', 'pax', 'siemens', 'mdpi'];
export const segDurationSecs = 30;
export const SponsorVideos = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill>
    {(sponsorVideoData.map(
      ((name, index) =>
          <Sequence
            key={name}
            from={index * fps * segDurationSecs}
            durationInFrames={segDurationSecs * fps}
          >
            <Video
              src={staticFile(`${name}.mp4`)}
              playbackRate={name == "mdpi" ? 1.5 : 1}
            />
          </Sequence>
      )))}
  </AbsoluteFill>
}