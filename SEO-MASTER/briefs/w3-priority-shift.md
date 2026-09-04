# w3-priority-shift — READY FOR PRODUCTION (implementation notes)

**Status:** Documents what this PR implemented after DataForSEO W3 lock (PRs #8 / #9).

## P0 ACCELERATE shipped in this PR
1. `/` — REBUILD IA + REFRESH  
2. `/service/pet-relocation-dubai/` — EXPAND money head (390)  
3. `/service/pet-relocation-to-dubai/` — REFRESH inbound-only  
4. `/service/pet-relocation-from-dubai/` — REFRESH outbound-only  
5. `/services/` — EXPAND tiers hub  
6. `/service/pet-transport-dubai/` — EXPAND; pet taxi Dubai (590) primary commercial opportunity  

## Explicitly not in this PR
- Dog / cat / international service EXPAND (lower urgency / P2–P3).
- Cost guide EXPAND, companies CREATE, corporate CREATE (deferred).
- No search-architecture / URL ownership changes.
- No second copy of W1–W3 binaries (PR #12 already on main at `website/public/assets/w1-w3/`).

## Image path lock
All newly wired W3 visuals use `/assets/w1-w3/<filename>` only. Blocked original-photo heroes keep existing `/images/` placeholders. No files written under `website/public/images/` in this PR.
