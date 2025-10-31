import {AbsoluteFill, Sequence, staticFile, useVideoConfig, Video} from "remotion";

export const sponsorVideosData = [
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'cyon',
    duration: 10,
    playbackRate: 1.0
  },
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'pax',
    duration: 129,
    playbackRate: 1
  },
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'adobe',
    duration: 63,
    playbackRate: 1
  },
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'baseltech',
    duration: 30,
    playbackRate: 1
  },
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'eh',
    duration: 252,
    playbackRate: 1
  },
  {
    file: 'baselhack',
    duration: 12,
    playbackRate: 1.0
  },
  {
    file: 'coop',
    duration: 47,
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