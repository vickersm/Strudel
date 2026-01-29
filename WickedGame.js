$: arrange(
  [4, note("<1 5 8 5 8 5 1 5>*8").scale("a:major").transpose("<0 -2 -7 _>")],
  [4, note("<1 3 5 8 10 8 5 1>*8").scale("a:major").scaleTrans("<0 -1 -4 _>")],
).trans(-12).sound("gm_epiano2:1").vib("<0!4 40:.8>/4")

$: arrange(
  [4, silence],
  [40, note("<1 5 3 1 4 3 1 3 0 4 2 0 3 2 1 0>*8").scale("a:major")],
).s("gm_pad_poly:<0!16 3!4>").pan(rand).gain(slider(1,.5,2,.1))

$: arrange(
  [4, silence],
  [8, note("[1]")],
  [8, note("[1(3,8) 1(2,4)]").room(0.7).decay(0.8)],
  [12, note("[1(3,8)]")],
).scale("a:major").scaleTrans("<0 -1 -4 _>").trans(-24).sound("gm_acoustic_bass:<3 4>/4").gain("<1 1 1.5 _>")._pianoroll()

$: arrange(
  [16, silence],
  [40, note("[1 3 5 8 10 <12 8> <15 5> <17 ~>]*2").scale("a:major").scaleTrans("<0 -1 -4 _>")],
).trans(-12).sound("gm_epiano2:<0!2 2 3!2 5!2 6 7 8>/4").pan(rand2).room(0.8).vib("<0!18 20!2>")

const melody = n(`<[-@3 [3 3] 3 3@2 2@3 2 1@8 1!2 1@2 1@2 2@2 1@4 -]
        [-@3 [3 3] 3 3@2 4@3 4 2@8 4!2 4@2 5@2 4@2 3@3 1@2]
        [5@6 4@4 3@1 2@1 3@0.5 2@0.5 1@8 - 1@2]
        [5@6 4@4 3@1 2@1 3@0.5 2@0.5 1@8 - 1@2]
        [5@6 4@4 3@2 2@1 1@8 -@3 2@0.8 1@0.8]
      >/4`).penv("<[0@16] [0@13 -5@3] [5@2 0@12 -5@2] [5 0@15] [5@2 0@14]>/4");
const refrain = n(`<[-@3 [3 3] 3 3@2 2@3 2 1@8 1!2 1@2 1@2 2@2 1@4 -]
        [-@3 [3 3] 3 3@2 4@3 4 2@8 4!2 4@2 5@2 4@2 3@3 1@2]
        [5@6 4@4 3@1 2@1 3@0.5 2@0.5 1@8 - 1@2]
        [[5@2 4 4]@4 3@2!2 2@1 3@0.5 2@0.5 1@8 - 1@2]
        [5@6 4@4 3@2 2@1 1@8 -@3 2@0.8 1@0.5 -@0.3]
      >/4`);
const bridge = n("<1 5 2 5 3 5 4 5>*8").fit().mask(`<
      <[1 0 1 0 1 0 1 0] 
       [1 1 1 1 1 1 1 1]>
       [0 1 0 1 0 1 0 1] 
      >`).gain("<0.7 0.8 0.9 0.8 0.7>").room(.5);
$: arrange(
  [20, silence],
  [20, melody],
  [4, silence],
  [16, bridge],
).scale("a:major").sound("gm_electric_guitar_clean")

const beat1 = stack(
    s("bd*4").gain(0.7),                // Four-on-the-floor kick drum
    s("~ sd").room(0.5),      // Snare on the backbeat with reverb
    s("hh*8").gain(0.6),      // Straight eighth-note hi-hats
    s("cp(3,8)").nudge(0.02).gain(.4)  // Polyrhythmic clap for extra groove
).bank("RolandTR909")
const beat2 = stack(
  s("bd [~ bd] ~ [~ bd]").gain(1.2), // Ghost-note kick pattern
  s("~ sd").delay(0.2).room(0.3),     // Snare with a tight echo
  s("hh*[8 16]").gain(0.5).pan(rand), // Alternating speed & random panning
  s("cp(3,8,2)").gain(0.4)            // Subtle, shifted claps
).bank("RolandTR909")
$: arrange(
  [4, silence],
  [2, beat1],
  [1, beat2],
  [1, silence],
  [14, beat1],
  [20, beat2]
)
