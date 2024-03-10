import { DetailedHTMLProps, FC, VideoHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type VideoPlayerProps = {
  videoPath: string
  classNames?: {
    root?: string
    source?: string
  }
  type?: string
  restVideoTags?: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  videoPath,
  classNames,
  type = 'video/mp4',
  restVideoTags,
}) => {
  return (
    <video
      className={twMerge('h-full w-full', classNames?.root)}
      controls
      preload='auto'
      autoPlay={true}
      {...restVideoTags}
    >
      <source className={classNames?.source} src={videoPath} type={type} />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer
