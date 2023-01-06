import { Box } from "@chakra-ui/react";
import React from "react";
import style from "./VideoPlayer.module.css";

type VideoType = {
  url: string;
};

const VideoPlayer = ({ url }: VideoType) => (
  <Box className={style.videoResponsive}>
    <iframe
      width="100%"
      height="700"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Box>
);

export default VideoPlayer;
