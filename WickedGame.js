setCpm(100/4);

const piano = arrange(
  [4, note("<1 5 8 5 8 5 1 5>*8").scale("a:major").transpose("<0 -2 -7@2>")],
  [4, note("<1 3 5 8 10 8 5 1>*8").scale("a:major").scaleTrans("<0 -1 -4@2>")],
).trans(-12).sound("gm_epiano2:1").vib("<0!4 40:.6>/4");
$: arrange(
  [8, piano],
  [4, piano.delay(.1).delaysync(.2).delaytime([.5 -1])],
  [4, silence],
);
  

$: arrange(
  [4, silence],
  [40, note("<1 5 3 1 4 3 <1 2> <3 1>>*8").scale("a:major").scaleTrans("<0 -1>")],
).s("gm_pad_poly:<0!16 3!4>").pan(rand2).gain(slider(0.7,.5,2,.1))

$: arrange(
  [4, silence],
  [8, note("<[1@3 1] 1!2>*2").delay(.5)],
  
  [4, note("[1,5,8,12,15]").every(2, x => x.jux(rev)).arp("[0 1 2 3 [0,2,4] 3 2 1]")],
  [4, note("[1(3,8)]")],
  [8, note("[1(3,8) 1(2,4)]").room(0.7).decay(0.8)],
  [8, note("[1(3,8)]")],
  [4, note("[1(3,8) 1(2,4)]").room(0.7).decay(0.8)],
).scale("a:major").scaleTrans("<0 -1 -4@2>").trans(-24).sound("gm_acoustic_bass:3").gain("<1 1.2 1.4@2>")._pianoroll()

$: arrange(
  [12, silence],
  [40, note("[1 3 5 8 10 <12 8> <15 5> <17 ~>]*2").scale("a:major").scaleTrans("<0 -1 -4 _>")],
).trans(-12).sound("gm_epiano2:<0!2 2 3!2 5!2 6 7 8>/4").pan(rand2).room(0.8)

const melody = n(`<[-@3 [3 3] 3 3@2 2@3 2 1@8 1!2 1@2 1@2 2@2 1@5]
        [-@3 [3 3] 3 3@2 4@3 [4 3] 2@8 4!2 4@2 5@2 4@2 3@3 1@2]
        [5@6 4@4 3@1 2@1 1@10 - 1@2]
        [5@6 4@4 3@1 2@1 [3 2] 1@8 - 1@2]
        [5@6 4@4 3@2 2@1 1@8 -@3 2@0.8 1@0.8]
        <[-@16]
         [-@7 [2 1] -@7 [2 1]]>
      >/4`).gain(1.5).penv("<[0@16] [0@4 [0 1] 0@4 2 0 -4@2] [5@2 0@12 -3@2] [5 0@15] [5@2 0@14] [0@16]>/4")
            // .vib(`<
            //         [0@7 6@3 0 5@8 0@11 4@4]
            //         [0@4 [0 1] 0@4 2!2 -5@2]
            //         [[0 2 4]*2 0@12 -5@2]
            //         [5 0@15]
            //         [5@2:.1 0@14]
            //       >/4:.2`);
const bridge = n("<<1 2 3 4> 5>*8").fit().mask(`<
      <[1 0 1 0 1 0 1 0] 
       [1 1 1 1 1 1 1 1]>
       [0 1 0 1 0 1 0 1] 
      >`).gain("[1 1.1 1.2 1 0.8]/8").room(1.5);
const refrain = n(`<
        [- 5 3@2 4 3 2 1]!3
        [- <0 1> 1@2 <2 1> <3 1> <2 1> 1]
      >`).pan(sine2).room(.7).delay(.2);
$: arrange(
  [20, silence],
  [24, melody.scale("a:major").sound("gm_acoustic_guitar_nylon:9")],
  [12, bridge.scale("a:major").sound("gm_electric_guitar_jazz:2")],
  [8, refrain.scale("a:major").sound("gm_electric_guitar_clean:3")],
)

const beat1 = stack(
    s("bd*4").gain(0.7),                // Four-on-the-floor kick drum
    s("~ sd").room(0.5),      // Snare on the backbeat with reverb
    s("hh*8").gain(0.6),      // Straight eighth-note hi-hats
    s("cp(3,8)").nudge(0.02).gain(.4)  // Polyrhythmic clap for extra groove
).bank("RolandTR909")
const beat2 = stack(
  s("bd [~ bd] ~ [~ bd]").gain(.8), // Ghost-note kick pattern
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
