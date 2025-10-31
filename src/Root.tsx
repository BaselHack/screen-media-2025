import './tailwind.css';
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import {JobWall} from "./JobWall/JobWall";
import {sponsorVideosData, SponsorVideos} from "./SponsorVideos/SponsorVideos";
import { jobs } from "./JobWall/jobs";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />

      <Composition
        id="JobWall"
        component={JobWall}
        durationInFrames={(jobs.length * 7 * 30) + (34 * 30)} // 8 secs per job, with overlap transition; + 35 secs static videos - 1 sec transition, 30 fps
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="SponsorVideos"
        component={SponsorVideos}
        durationInFrames={sponsorVideosData.reduce((acc, curr) => acc + curr.duration, 0) * 30}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
