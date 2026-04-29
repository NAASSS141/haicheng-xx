# MVP v16 Flow Check Report

## Result

A blocking flow issue was found and fixed.

## Issue found

The runtime action runner stopped when it reached a dialogue action. This meant actions placed after a dialogue in the same hotspot sequence, such as setting flags or clearing overlays, could be skipped.

Affected examples:

- Reading the old letter could fail to set `read_letter`.
- Talking to the artisan could fail to set `met_artisan` / `showed_shell`.
- Sitting at the market stall could fail to set `sat_market`.

These flags unlock later interactions, so the game could feel stuck or impossible to progress.

## Fix

The action runner now stores any actions after a dialogue in the shot queue. When the dialogue finishes, the queued actions continue automatically.

## Verified main path

The automated flow smoke test successfully progressed through:

1. Start shell
2. Beach
3. Read old letter
4. Touch glowing shell
5. Workshop
6. First artisan talk
7. Second artisan talk
8. Shell puzzle
9. Market
10. Sit at stall
11. Porridge puzzle
12. Lion finale
13. Ending flag

## Notes

This does not replace real human playtesting, but it confirms the critical progression path no longer blocks.
