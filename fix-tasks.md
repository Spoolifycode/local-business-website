# Project Fix Tasks

## 1. Case Sensitivity Fixes (Priority)
- [x] Update SkeletonLayouts.tsx imports to use lowercase 'layout'
- [x] Fix Card component typing
- [ ] Review and update any remaining uppercase 'Layout' references
- [ ] Verify build after case fixes

## 2. Code Organization (Next Phase)
- [ ] Consolidate business-mapper files:
  - Compare `src/lib/business/business-mapper.ts` and `src/lib/data/business-mapper.ts`
  - Merge functionality into single location
  - Update all references to use consolidated version

## 3. Route Structure Review
- [ ] Audit (routes) folder usage
- [ ] Review articles vs blog overlap
- [ ] Document intended routing structure

## 4. Performance Optimization
- [ ] Audit "use client" directives
- [ ] Review component client/server split
- [ ] Check Tailwind class redundancies

## 5. Type Import Consistency
- [ ] Standardize type import style:
  ```typescript
  // Choose one style:
  import type { NextPage } from 'next';
  // or
  import { NextPage } from 'next';
  ```

## 6. Layout Structure
- [ ] Verify Header/Footer usage in layouts
- [ ] Document nested layout strategy
- [ ] Confirm intended layout hierarchy

## Build & Test
- [ ] Run full TypeScript compilation
- [ ] Verify all routes work as expected
- [ ] Test performance after changes
