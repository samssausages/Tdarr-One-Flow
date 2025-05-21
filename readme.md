## Tdarr - One Flow - To Rule Them All

Goal to have One Flow (set of flows) to Rule all your Media!

I accomplish this by using Library Variables.  This allows us to change our quality and encoding settings in the library.  This is much easier than trying to edit the flow every time we want to encode differently.
I have a library for low quality, high quality, Animation, Movies.  Each has their own quality settings.  Then I just move the files I'm processing into the corresponding library folder and tdarr will process as needed.

- While I have ran thousands of files through this flow, please consider this beta! Do not trust it with your media library until you have ran a bunch of various files through it and understand how it operates!  Let me know if you run into unexpected behavior!
- Do not use with DV or HDR+.  Could cause playback error.  Works fine with basic HDR (Fix for DV is on the roadmap, need help implementing it)
- CPU & QSV work but need more testing, as I don't use them often.  NVENC is well tested.
- This Flow is designed to be used with an input and output directory.  Futurue versions will have a library option.
- Uses the -vbr method to obtain a predictable bitrate.  With cq as a fallback method, or when we decide the bitrate is too low for -vbr to work well.

# Features
- Uses Library Variables for Quality Settings. This way you can have different libraries for different quality settings
- Uses Centralized Flow Variables for configurables in one location (1 - Input) No need to hunt the entire flow for configurables
- We calculate things like -maxrate based on your target bitrate. Simplifying user imput
- Lots of notes & documentation in the flow
- Extensive logging and use of icons to make tracking down failures a breeze
- Works with Nvidia, Intel QuickSync and CPU (Help me add others by sharing your ffmpeg command)
- Strip audio to where only the tracks you want remain
- If a lossless audio track exists, encode in opus (can disable, still needs refinement, as sometimes encodes high bitrate non-lossless tracks)
- Deinterlace .ts files. (tv DVR broadcasts)
- Export Embedded Subtitles (Could use more testing and refinement)

  

I broke it down into 5 steps/flows:

1 - Input (Define Flow Variables & Configurables.  Tags files that may need special processing down the stack)

2 - Prep (Standardizes the File so it is less likely to fail encoding later)

3 - Audio (Clean audio and encode to Opus, if enabled)

4 - Video (Define desired bitrate by resolution, fall back on cq)

5 - Save (final checks and move operations)

# Installation
1. Create a new flow for each of the above steps (1-5) by:
   
    a. Go to Tdarr Flows

    b. Click "add flow"

    c. Scoll to bottom and copy/paste json into "Import JSON Template" 

3. Create a new Library with the Variables listed below (Make Sure your library has an input folder defined & output folders exist)
4. Profit

# Tweaks
- All the configurable Flow Settings can be edited in flow 1 - Input
- If you have an Nvidia 2000 series or up, enable flow plugin fl_nvenc_b-frames in the 1-Input flow. (1660 Super as well)
- You can disable audio processing with library variable do_audio = false

Library variables you need to add, with example setting:

# Variable Notes:
Audio bitrates and cutoff are set PER CHANNEL.  We use that to calculate based on number of channels in the audio stream.

# Required Fields
```
test_mode true # true = will not delete source file.  False = will delete source file.  Without source files won't delete.

output_dir_done /media/4_done # path from within tdarr

output_dir_review /media/4_done_review # if something didn't go right, we move to review folder.

v_cq 20 # quality setting for cq fallback method. Scale of 0-51.  Where 0 is lossless and 51 is the lowest quality.  16-18 is often considered indistinguishable.  18-24 is usually a sane range.

bitrate_480p 1250k # bitrate you want for given resolution

bitrate_576p 1400k

bitrate_720p 2000k

bitrate_1080p 2500k

bitrate_1440p 3800k

bitrate_4k 10000k

bitrate_4k_hdr 12500k

do_audio_clean - true - Remove Commentary Audio, Remove Languages not listed in "audio_language", Keep only the Audio Track with Highest Channel Count

do_audio_encode - true - Encode 1st Audio track to Opus

bitrate_audio 160k # Output audio bitrate we will encode to.  This is PER CHANNEL.

bitrate_audio_cutoff 192k # will not encode if source audio bitrate is under this value.  This is PER CHANNEL

audio_language und,un,eng,en,ger,deu,de,zho,zh,chi,jpn,ja,kor,ko,spa,es,cpe,  # languages that you want to keep, if blank it's skipped

```

# Optional Library Variable Fields

```
If not defined, the default is "false" (disabled)

disable_vbr = true # Disable Primary VBR encoding Method

disable_cq = true # Disable Fallback encoding method

disable_video = true # Optional - Only needed if you want to disable video processing - Set to True

do_hevc = true # process hevc?

encoder = nvenc/qsv/amf/vaapi/cpu - Override Encoder Autodetect and manually set what encoder to use (currently only nvenc/qsv/cpu work)

```

# Quality Examples

Peoples opinions vary greatly on this.  Also content will have a big impact on what is optimal.  If you think you have good settings, share them!

## Low Quality:

```
v_cq 24 # quality setting for cq fallback method. Scale of 0-51.  Where 0 is lossless and 51 is the lowest quality.  16-18 is often considered indistinguishable.  18-24 is usually a sane range.

bitrate_480p 1250k # bitrate you want for given resolution

bitrate_576p 1400k

bitrate_720p 2000k

bitrate_1080p 2500k

bitrate_1440p 3800k

bitrate_4k 10000k

bitrate_4k_hdr 12500k

bitrate_audio 160k # Audio bitrate we will encode to.  This is PER CHANNEL.

bitrate_audio_cutoff 192k # will not encode source audio under this bitrate.  This is PER CHANNEL

```

## Mid-High Quality:

```
v_cq 20 # quality setting for cq fallback method. Scale of 0-51.  Where 0 is lossless and 51 is the lowest quality.  16-18 is often considered indistinguishable.  18-24 is usually a sane range.

bitrate_480p 1750k # bitrate you want for given resolution

bitrate_576p 2000k

bitrate_720p 3000k

bitrate_1080p 4000k

bitrate_1440p 6000k

bitrate_4k 17500k

bitrate_4k_hdr 20000k

bitrate_audio 256k # Audio bitrate we will encode to.  This is PER CHANNEL

bitrate_audio_cutoff 384k # will not encode source audio under this bitrate.  This is PER CHANNEL

```

## FAQ

Q: It was working but now it isn't.  The Variables aren't working anymore, but I do have them configured.  Log has message:  "Variable of value does not match condition == "

A: Sometimes a Tdarr update can break the existing Variables that you configured in the Library.  When this happens you need to re-save them to update the database.  You could delete them and re-add them, but the easiest way I have found is to simply add a space, " ", after the variable, then click another variable and it will save it.  After adding spaces to everything, go back and click on the variables and delete the spaces.  This will re-save the variables to the database and should correct the issue. 

Q:  Why is my video not encoding?  Why is it just copying the video?

A:  The most common reason for this is that your desired Output Bitrate is higher (or close to) your Input bitrate.  It wouldn't make sense to encode a 4000k video to 6000k.  When we encounter this we do go to the fallback cq encoding method, but this also checks to make sure a reasonable size savings can be obtained.  You can lower the quality by raising the cq value.
But keep in mind, it may not be worth it to encode such videos.  One-Flow probably won't encode if you only save 5% of space, the loss in quality wouldn't be worth a 5% space savings.  Keep it original, or lower the output bitrate.

Q:  Why are my hevc vides not encoding?

A:  By default we skip hevc, to force hevc encoding add the custom library variable: do_hevc = true

## Flow Screenshot
The flow is huge, but here is an example.

![Video Example](https://github.com/samssausages/tdarr/blob/80ee7f3c63ab8f017eefac86c9a25f7f101f129a/video_example.png)
![Input Example](https://github.com/samssausages/tdarr/blob/80ee7f3c63ab8f017eefac86c9a25f7f101f129a/input_example.png)


## Release Notes

Changelog:

V0.93

BREAKING CHANGES:

Split "do_audio" into:

do_audio_clean - true/false - Remove Commentary Audio, Remove Languages not listed in "audio_language", Keep only the Audio Track with Highest Channel Count

do_audio_encode - true/false - Encode 1st Audio track to Opus


ACTION TO TAKE IF UPGRADING FROM OLD VERSION:

Remove "do_audio" Library Variable and create "do_audio_clean" and "do_audio_encode" Library Variables


OTHER CHANGES:

- is_audio_lossless custom JS - Expanding to capture more lossless audio codecs through the custom JS, for more durable lossless codec identification. - Still refining this
- Added optional library variable: "disable_vbr" - true/false - to disable vbr encoding method and force cq encoding. (if you have disable_cq enabled as well, then video encoding is skipped)
- Added optional library variable: "encoder" - nvenc/qsv/amf/vaapi/cpu - Override Autodetect and manually set what encoder to use (currently only nvenc/qsv/cpu work)
- Moved "lookahead=32" from 4 - Video to 1 - Input - Flow Variable "fl_cpu_main"

BUG FIX:

- Added missing error handling to audio cleaning process
- Improved Audio encode error reporting
