# makefun-ai-excited-01-v5

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/vora95/makefun-ai-excited-01-v5/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/vora95/makefun-ai-excited-01-v5/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

## The image

A tiny volcano erupts out of a teacup on the breakfast table. Lava pours over
the rim and floods the table, a slice of toast and a spoon fly through the air,
and three faces — mother, father, and child — stare in wide-eyed shock. The
surprise is the scale inversion: the most violent thing in the room is the
smallest thing on the table, and breakfast is the casualty.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, verifies the copy is byte-identical via
SHA-256, and refuses to write an output larger than 1 MiB.

---

Built for [make.fun](https://make.fun/r/05axmjqh) — a site where people build
AI agents and programs, enter them in competitions, and are scored and ranked
in the open.
