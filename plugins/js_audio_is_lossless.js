module.exports = async (args) => {
  
  // Define lossless audio codecs
  const losslessCodecs = ["alac", "dca", "flac", "mlp", "pcm_alaw", "pcm_bluray", "pcm_dvd", "pcm_f32be", "pcm_f32le", "pcm_f64be", "pcm_f64le", "pcm_mulaw", "pcm_s16be", "pcm_s16be_planar", "pcm_s16le", "pcm_s16le_planar", "pcm_s24be", "pcm_s24daud", "pcm_s24le", "pcm_s24le_planar", "pcm_s32be", "pcm_s32le", "pcm_s32le_planar", "pcm_s64be", "pcm_s64le", "pcm_s8", "pcm_s8_planar", "pcm_u16be", "pcm_u16le", "pcm_u24be", "pcm_u24le", "pcm_u32be", "pcm_u32le", "pcm_u8", "pcm_vidc", "sonicls", "tta", "wavpack"];  

  // Check if the audio codec of the file is in the lossless list
  const streams = args.inputFileObj.ffProbeData.streams || [];
  let isLossless = false;

  for (const stream of streams) {
    if (stream.codec_type === "audio" && losslessCodecs.includes(stream.codec_name.toLowerCase())) {
      isLossless = true;
      break;
    }
  }

  // Tag the file as `is_audio_lossless` if it meets the condition
  args.variables.is_audio_lossless = isLossless;

  return {
    outputFileObj: args.inputFileObj,
    outputNumber: 1, // Continue the workflow
    variables: args.variables, // Pass the updated variables
  };
};
