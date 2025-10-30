import {AbsoluteFill, Sequence, staticFile, useVideoConfig, Video} from "remotion";

export const sponsorVideoData = ['sponsor1', 'sponsor2', 'sponsor3', 'sponsor4'];
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
              // playbackRate={name == "xzz" ? 1.5 : 1}
            />
          </Sequence>
      )))}
  </AbsoluteFill>
}