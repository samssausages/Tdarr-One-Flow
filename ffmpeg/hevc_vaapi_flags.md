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
Encoder hevc_vaapi [H.265/HEVC (VAAPI)]:
    General capabilities: dr1 delay hardware 
    Threading capabilities: none
    Supported hardware devices: vaapi 
    Supported pixel formats: vaapi
h265_vaapi AVOptions:
  -low_power         <boolean>    E..V....... Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
  -idr_interval      <int>        E..V....... Distance (in I-frames) between IDR frames (from 0 to INT_MAX) (default 0)
  -b_depth           <int>        E..V....... Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
  -async_depth       <int>        E..V....... Maximum processing parallelism. Increase this to improve single channel performance. This option doesn't work if driver doesn't implement vaSyncBuffer function. (from 1 to 64) (default 4)
  -max_frame_size    <int>        E..V....... Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
  -rc_mode           <int>        E..V....... Set rate control mode (from 0 to 6) (default auto)
     auto            0            E..V....... Choose mode automatically based on other parameters
     CQP             1            E..V....... Constant-quality
     CBR             2            E..V....... Constant-bitrate
     VBR             3            E..V....... Variable-bitrate
     ICQ             4            E..V....... Intelligent constant-quality
     QVBR            5            E..V....... Quality-defined variable-bitrate
     AVBR            6            E..V....... Average variable-bitrate
  -qp                <int>        E..V....... Constant QP (for P-frames; scaled by qfactor/qoffset for I/B) (from 0 to 52) (default 0)
  -aud               <boolean>    E..V....... Include AUD (default false)
  -profile           <int>        E..V....... Set profile (general_profile_idc) (from -99 to 255) (default -99)
     main            1            E..V.......
     main10          2            E..V.......
     rext            4            E..V.......
  -tier              <int>        E..V....... Set tier (general_tier_flag) (from 0 to 1) (default main)
     main            0            E..V.......
     high            1            E..V.......
  -level             <int>        E..V....... Set level (general_level_idc) (from -99 to 255) (default -99)
     1               30           E..V.......
     2               60           E..V.......
     2.1             63           E..V.......
     3               90           E..V.......
     3.1             93           E..V.......
     4               120          E..V.......
     4.1             123          E..V.......
     5               150          E..V.......
     5.1             153          E..V.......
     5.2             156          E..V.......
     6               180          E..V.......
     6.1             183          E..V.......
     6.2             186          E..V.......
  -sei               <flags>      E..V....... Set SEI to include (default hdr+a53_cc)
     hdr                          E..V....... Include HDR metadata for mastering display colour volume and content light level information
     a53_cc                       E..V....... Include A/53 caption data
  -tiles             <image_size> E..V....... Tile columns x rows
```