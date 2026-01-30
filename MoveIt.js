/*
  @title I like to move it (cover)
  @by vghazard
*/
setcpm(130/4)

function baseEffect(pattern) {
  return pattern.n().scale("A:minor").trans(-24)
    .room(.3)
    .decay(.5)
    .penv(6).pdecay(.05)
    .fm(1).fmh(5)
    .s("wt_digital_crickets")
    .lpf(400)
    .lpq(10)

}
$: arrange(
  [8, baseEffect(`<[1 1 1 [1 5#]]   [3 3 [2# 4] [2# -2#]]  >`)],
   // [1 e + a 2 ~ ~ ~ 3 ~ ~ ~ 4 ~ ~ ~]
  [16, baseEffect(`<
      [- - 1 - - 1 - - 1 - - 1 - - 1 -]
      [- - 1 - - 1 - - 2 - - 2 - - 2 -]
    >`)],
  [2, silence],
  [16, baseEffect(`<
      [1 - - 1 - - 1 _ - 1 - - 1 - 1 -]
      [2 - - 2 - - 2 _ - 2 - - 3 - 2 -]
    >`)],
)//.scaleTrans("<4 [4 1] 0 [0 3]>")

// Drumkit
$: s("[bd]*4");
$: arrange(
  [2, silence],
  [48, s("[~ sd]*4").gain(0.15)],
)
$: arrange(
  [4, silence],
  [20, s("<~ cp>*4").delay(0.1).gain(0.5)],
)
