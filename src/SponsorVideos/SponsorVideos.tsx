import {AbsoluteFill, Sequence, staticFile, useVideoConfig, Video} from "remotion";

export const sponsorVideosData = [
  {
    file: 'cyon',
    duration: 15,
    playbackRate: 1.0
  },
  {
    file: 'pax',
    duration: 127,
    playbackRate: 1
  },
  {
    file: 'adobe',
    duration: 60,
    playbackRate: 1
  },
  {
    file: 'eh',
    duration: 252,
    playbackRate: 1
  },
  {
    file: 'coop',
    duration: 45,
    playbackRate: 1
  }
];
export const SponsorVideos = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill>
    {(sponsorVideosData.map(
      (({file, duration, playbackRate}, index) => {
        // sum all previous durations
        const fromSeq = sponsorVideosData
          .slice(0, index)
          .reduce((acc, curr) => acc + curr.duration, 0) * fps;

        const name = file;
        const durationInFrames = duration * fps;

        return <Sequence
          key={name}
          from={fromSeq}
          durationInFrames={durationInFrames}
        >
          <Video
            src={staticFile(`${name}.mp4`)}
            playbackRate={playbackRate}
          />
        </Sequence>
      }))
    )}
  </AbsoluteFill>
}