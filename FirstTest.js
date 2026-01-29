// Patterns
const claps = s("[cp]*4").bank("tr909")
const drumKit = s("[bd <hh oh> <oh <cp rim cp sd>> _]*4").bank("tr909").dec(.4)
const melody = n("<0 4 0 9 <7 4>>*16").scale("g:minor")
  .scaleTranspose("<0 -1 -4 -7 -5 -4>").s("piano")
const bass = (mul) => 
  (mul === 1 
   ? n("<<0 5> <-3 4> 9 <10 8>>") 
   : n("<<5 0> <-2 4> 9 <10 8>>")
  ).fast(mul).scale("g:minor").trans((mul == 1 ? 1 : 2) * -12)
   .detune(rand).o(4).s("gm_synth_bass_1"); //gm_synth_bass_1, gm_lead_8_bass_lead

// channels
$: claps.mask("<1 0>")
$: arrange(
    [20, drumKit],
    [4, silence],
  )._scope({thickness: 1})
$: melody._pianoroll({label: 1})
$: arrange(
  // [Number of measures, sound to play]
  [8, silence],
  [4, bass(1)],
  [4, bass(16)],
  [4, bass(4)],
  [4, silence],
  ).color("<red orange yellow green>").pianoroll({flipTime: 1})
