import { MuteState } from '../enums/mute-state.enum';

export interface LocalVideoStats {
  /** Frame rate of the captured video, in fps. */
  CaptureFrameRate?: string;
  /** Height (pixels) of the captured video. */
  CaptureResolutionHeight?: string;
  /** Width (pixels) of the captured video. */
  CaptureResolutionWidth?: string;
  /** Delay from capturing to encoding the local video, in ms. */
  EncodeDelay?: string;
  /** Whether the video is muted or not. */
  MuteState?: MuteState;
  /** Bitrate of the sent video, in Kbps. */
  SendBitrate?: string;
  /** Frame rate of the sent video, in fps. */
  SendFrameRate?: string;
  /** Height of the sent video, in pixels. */
  SendResolutionHeight?: string;
  /** Width of the sent video, in pixels. */
  SendResolutionWidth?: string;
  /** Bitrate of the local video set in
   * [setVideoProfile](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#setvideoprofile).
   */
  TargetSendBitrate?: string;
  /** Total duration of the published video, in seconds. */
  TotalDuration?: string;
  /** Total freeze time of the encoded video, in seconds. */
  TotalFreezeTime?: string;
}
