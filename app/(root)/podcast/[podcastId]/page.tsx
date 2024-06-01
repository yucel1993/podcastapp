import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <div className=" text-red-50">PodcastDetails {params.podcastId}</div>;
};

export default PodcastDetails;
