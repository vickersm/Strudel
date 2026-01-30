/*
  @title Pony - Genuwine (cover)
  @by vghazard
*/

$: n("1!2")
    .mask("<[1 0] [1 1]>")
    .scale("A:major").scaleTrans("<4 [4 1] 0 [0 3]>").trans(-24)
    //.legato(.5)
    //.distort("1.2:1:diode")
    //.decay(1)
    .room(.5)
    .penv(6).pdecay(.05).decay(.8).distort("12:15")
    .gain(.01)
    .s("wt_digital_crickets")
  .lpf(400) // Heavy low-pass filter for that deep "burp"
  .lpq(10)  // High resonance to mimic the vocal-like quality
    //.s("gm_voice_oohs:2")
   // 

$: n(`<[~@2 5@2 7@2 9 ~]
       [~@2 ~@2 8@2 8 ~]!2
       [~@2 9 ~ <7 [7 8]>@2 <5 9>@2]
      >`)
  .penv("[0 <10 -1> <1 <3 -1>> 0]")
  .legato(.8).decay(.6).sustain(.2)
  .gain(1.8)
  .scale("A:major").trans(-12).s("gm_voice_oohs:6")

// Signature "Pony" Drum Pattern
$: stack(
  s("bd ~ bd ~"),           // Kick on 1 and 3
  s("~ sd ~ sd").delay(0.1), // Swung snare on 2 and 4
  s("[oh hh]*4").gain(0.8).legato(.4)       // Constant hi-hats
)

// The "Burp" Bass (Simplified)
note("c#1*4")
  .s("saw")
  .lpf(400) // Heavy low-pass filter for that deep "burp"
  .lpq(10)  // High resonance to mimic the vocal-like quality
