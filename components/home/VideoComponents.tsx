const VideoComponents = () => {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
      <video
        width="640px"
        height="360px"
        controls
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '1rem',
        }}
      >
        <source src="https://memocard.net/flashgo.mov" type="video/mp4" />
        您的浏览器不支持视频标签
      </video>
    </div>
  )
}

export default VideoComponents