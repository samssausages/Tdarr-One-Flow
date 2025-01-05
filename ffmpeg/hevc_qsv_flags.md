list your encoders run: 
```
ffmpeg -encoders
```

search the list run: 
```
ffmpeg -encoders | grep hevc
```

To query an encoder's options run: 
```
ffmpeg -h encoder=hevc_nvenc
```

Example:
GA102GL [RTX A5000]

```
Encoder hevc_qsv [HEVC (Intel Quick Sync Video acceleration)]:
    General capabilities: delay hybrid 
    Threading capabilities: none
    Supported hardware devices: qsv vaapi d3d11va qsv qsv 
    Supported pixel formats: nv12 p010le p012le yuyv422 y210le qsv vaapi d3d11 bgra x2rgb10le vuyx xv30le
hevc_qsv encoder AVOptions:
  -async_depth       <int>        E..V....... Maximum processing parallelism (from 1 to INT_MAX) (default 4)
  -preset            <int>        E..V....... (from 0 to 7) (default 0)
     veryfast        7            E..V.......
     faster          6            E..V.......
     fast            5            E..V.......
     medium          4            E..V.......
     slow            3            E..V.......
     slower          2            E..V.......
     veryslow        1            E..V.......
  -forced_idr        <boolean>    E..V....... Forcing I frames as IDR frames (default false)
  -low_power         <boolean>    E..V....... enable low power mode(experimental: many limitations by mfx version, BRC modes, etc.) (default auto)
  -rdo               <int>        E..V....... Enable rate distortion optimization (from -1 to 1) (default -1)
  -max_frame_size    <int>        E..V....... Maximum encoded frame size in bytes (from -1 to INT_MAX) (default -1)
  -max_frame_size_i  <int>        E..V....... Maximum encoded I frame size in bytes (from -1 to INT_MAX) (default -1)
  -max_frame_size_p  <int>        E..V....... Maximum encoded P frame size in bytes (from -1 to INT_MAX) (default -1)
  -max_slice_size    <int>        E..V....... Maximum encoded slice size in bytes (from -1 to INT_MAX) (default -1)
  -mbbrc             <int>        E..V....... MB level bitrate control (from -1 to 1) (default -1)
  -extbrc            <int>        E..V....... Extended bitrate control (from -1 to 1) (default -1)
  -p_strategy        <int>        E..V....... Enable P-pyramid: 0-default 1-simple 2-pyramid(bf need to be set to 0). (from 0 to 2) (default 0)
  -b_strategy        <int>        E..V....... Strategy to choose between I/P/B-frames (from -1 to 1) (default -1)
  -dblk_idc          <int>        E..V....... This option disable deblocking. It has value in range 0~2. (from 0 to 2) (default 0)
  -low_delay_brc     <boolean>    E..V....... Allow to strictly obey avg frame size (default auto)
  -max_qp_i          <int>        E..V....... Maximum video quantizer scale for I frame (from -1 to 51) (default -1)
  -min_qp_i          <int>        E..V....... Minimum video quantizer scale for I frame (from -1 to 51) (default -1)
  -max_qp_p          <int>        E..V....... Maximum video quantizer scale for P frame (from -1 to 51) (default -1)
  -min_qp_p          <int>        E..V....... Minimum video quantizer scale for P frame (from -1 to 51) (default -1)
  -max_qp_b          <int>        E..V....... Maximum video quantizer scale for B frame (from -1 to 51) (default -1)
  -min_qp_b          <int>        E..V....... Minimum video quantizer scale for B frame (from -1 to 51) (default -1)
  -adaptive_i        <int>        E..V....... Adaptive I-frame placement (from -1 to 1) (default -1)
  -adaptive_b        <int>        E..V....... Adaptive B-frame placement (from -1 to 1) (default -1)
  -scenario          <int>        E..V....... A hint to encoder about the scenario for the encoding session (from 0 to 8) (default unknown)
     unknown         0            E..V.......
     displayremoting 1            E..V.......
     videoconference 2            E..V.......
     archive         3            E..V.......
     livestreaming   4            E..V.......
     cameracapture   5            E..V.......
     videosurveillance 6            E..V.......
     gamestreaming   7            E..V.......
     remotegaming    8            E..V.......
  -avbr_accuracy     <int>        E..V....... Accuracy of the AVBR ratecontrol (unit of tenth of percent) (from 0 to 65535) (default 0)
  -avbr_convergence  <int>        E..V....... Convergence of the AVBR ratecontrol (unit of 100 frames) (from 0 to 65535) (default 0)
  -skip_frame        <int>        E..V....... Allow frame skipping (from 0 to 3) (default no_skip)
     no_skip         0            E..V....... Frame skipping is disabled
     insert_dummy    1            E..V....... Encoder inserts into bitstream frame where all macroblocks are encoded as skipped
     insert_nothing  2            E..V....... Encoder inserts nothing into bitstream
     brc_only        3            E..V....... skip_frame metadata indicates the number of missed frames before the current frame
  -idr_interval      <int>        E..V....... Distance (in I-frames) between IDR frames (from -1 to INT_MAX) (default 0)
     begin_only      -1           E..V....... Output an IDR-frame only at the beginning of the stream
  -load_plugin       <int>        E..V....... A user plugin to load in an internal session (from 0 to 2) (default hevc_hw)
     none            0            E..V.......
     hevc_sw         1            E..V.......
     hevc_hw         2            E..V.......
  -load_plugins      <string>     E..V....... A :-separate list of hexadecimal plugin UIDs to load in an internal session (default "")
  -look_ahead_depth  <int>        E..V....... Depth of look ahead in number frames, available when extbrc option is enabled (from 0 to 100) (default 0)
  -profile           <int>        E..V....... (from 0 to INT_MAX) (default unknown)
     unknown         0            E..V.......
     main            1            E..V.......
     main10          2            E..V.......
     mainsp          3            E..V.......
     rext            4            E..V.......
     scc             9            E..V.......
  -tier              <int>        E..V....... Set the encoding tier (only level >= 4 can support high tier) (from 0 to 256) (default high)
     main            0            E..V.......
     high            256          E..V.......
  -gpb               <boolean>    E..V....... 1: GPB (generalized P/B frame); 0: regular P frame (default true)
  -tile_cols         <int>        E..V....... Number of columns for tiled encoding (from 0 to 65535) (default 0)
  -tile_rows         <int>        E..V....... Number of rows for tiled encoding (from 0 to 65535) (default 0)
  -recovery_point_sei <int>        E..V....... Insert recovery point SEI messages (from -1 to 1) (default -1)
  -aud               <boolean>    E..V....... Insert the Access Unit Delimiter NAL (default false)
  -pic_timing_sei    <boolean>    E..V....... Insert picture timing SEI with pic_struct_syntax element (default true)
  -transform_skip    <int>        E..V....... Turn this option ON to enable transformskip (from -1 to 1) (default -1)
  -int_ref_type      <int>        E..V....... Intra refresh type. B frames should be set to 0 (from -1 to 65535) (default -1)
     none            0            E..V.......
     vertical        1            E..V.......
     horizontal      2            E..V.......
     slice           3            E..V.......
  -int_ref_cycle_size <int>        E..V....... Number of frames in the intra refresh cycle (from -1 to 65535) (default -1)
  -int_ref_qp_delta  <int>        E..V....... QP difference for the refresh MBs (from -32768 to 32767) (default -32768)
  -int_ref_cycle_dist <int>        E..V....... Distance between the beginnings of the intra-refresh cycles in frames (from -1 to 32767) (default -1)
```

## additional

```
The ratecontrol method is selected as follows:

When 'global_quality' is specified, a quality-based mode is used. Specifically this means either
- CQP - constant quantizer scale, when the 'qscale' codec flag is also set (the '-qscale' ffmpeg option).
- LA_ICQ - intelligent constant quality with lookahead, when the 'look_ahead' option is also set.
- ICQ - intelligent constant quality otherwise.
Otherwise, a bitrate-based mode is used. For all of those, you should specify at least the desired average bitrate with the 'b' option.
- LA - VBR with lookahead, when the 'look_ahead' option is specified.
- VCM - video conferencing mode, when the 'vcm' option is set.
- CBR - constant bitrate, when 'maxrate' is specified and equal to the average bitrate.
- VBR - variable bitrate, when 'maxrate' is specified, but is higher than the average bitrate.
- AVBR - average VBR mode, when 'maxrate' is not specified. This mode is further configured by the 'avbr_accuracy' and 'avbr_convergence' options.
Note that depending on your system, a different mode than the one you specified may be selected by the encoder. Set the verbosity level to verbose or higher to see the actual settings used by the QSV runtime.

Additional libavcodec global options are mapped to MSDK options as follows:

'g/gop_size' -> 'GopPicSize'
'bf/max_b_frames'+1 -> 'GopRefDist'
'rc_init_occupancy/rc_initial_buffer_occupancy' -> 'InitialDelayInKB'
'slices' -> 'NumSlice'
'refs' -> 'NumRefFrame'
'b_strategy/b_frame_strategy' -> 'BRefType'
'cgop/CLOSED_GOP' codec flag -> 'GopOptFlag'
For the CQP mode, the 'i_qfactor/i_qoffset' and 'b_qfactor/b_qoffset' set the difference between QPP and QPI, and QPP and QPB respectively.
Setting the 'coder' option to the value vlc will make the H.264 encoder use CAVLC instead of CABAC.
```