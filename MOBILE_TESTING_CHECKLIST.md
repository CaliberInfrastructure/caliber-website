# Caliber Infrastructure - Mobile Testing Checklist

**Site:** caliberinfrastructure.com
**Date:** February 4, 2026
**Optimization Status:** ✅ Complete, Ready for Testing

---

## Quick Testing Guide

### Before You Start
1. Clear browser cache on all test devices
2. Test in **portrait mode first**, then landscape
3. Test with **slow 3G connection** to verify load times
4. Take screenshots of any issues for documentation

---

## Device Testing Matrix

### iPhone Testing

#### iPhone SE (375px) - CRITICAL
**Why:** Smallest modern iPhone, most likely to reveal issues

- [ ] **Navigation**
  - [ ] Tap hamburger menu → opens smoothly
  - [ ] All 4 nav links visible and tappable
  - [ ] Click "Diagnosis" → menu closes, scrolls to section
  - [ ] "Free Audit" button fits on screen

- [ ] **Hero Section**
  - [ ] Headline fully visible, no text cutoff
  - [ ] "Your Med Spa Is Quietly Losing $10-30k/mo" readable
  - [ ] Two CTAs stack vertically
  - [ ] No horizontal scrolling

- [ ] **Pricing Section**
  - [ ] "Full Automation" card displays properly
  - [ ] "$20k/mo value" number doesn't wrap
  - [ ] "$2,000/mo investment" readable
  - [ ] Feature checklist readable
  - [ ] "Get Your Free Audit" button tappable

- [ ] **Calculator**
  - [ ] Revenue dropdown tappable
  - [ ] Dollar input accepts numbers
  - [ ] Sliders work with touch
  - [ ] Results don't wrap: "$12,345" stays on one line
  - [ ] "Book Your Free Revenue Audit" button visible

- [ ] **Audit Form**
  - [ ] All input fields tappable (44x44px minimum)
  - [ ] Typing in name field → no page zoom
  - [ ] Phone/Email side-by-side
  - [ ] Submit button always visible (no keyboard overlap)

- [ ] **Footer**
  - [ ] All links tappable
  - [ ] Copyright text centered
  - [ ] No horizontal scrolling

- [ ] **Floating CTA**
  - [ ] Scroll down → CTA appears
  - [ ] Positioned above bottom (not overlapping Safari controls)
  - [ ] Scroll to calculator → CTA disappears
  - [ ] Tap CTA → scrolls to calculator

**Screenshot locations to test:**
- Homepage loaded
- Mobile menu open
- Pricing section
- Calculator with results
- Form filled out

---

#### iPhone 14/15 Pro (390px) - PRIMARY
**Why:** Most common current iPhone

- [ ] Navigation menu works smoothly
- [ ] Hero section displays perfectly
- [ ] Pricing cards stack properly
- [ ] Calculator inputs work
- [ ] Form submission works
- [ ] All numbers display without wrapping

**Quick Test:** Open site → tap through all sections → submit test form

---

#### iPad (768px+) - TABLET VIEW
**Why:** Tests mobile-to-desktop transition

- [ ] At 768px, desktop nav should appear (no hamburger)
- [ ] Pricing cards should go side-by-side
- [ ] Calculator should have left/right layout
- [ ] Form should show 2 columns for phone/email
- [ ] Font sizes should increase at this breakpoint

**Quick Test:** Rotate from portrait to landscape → verify layout changes

---

### Android Testing

#### Samsung Galaxy S22/S23 (360-412px) - CRITICAL
**Why:** Most popular Android device

- [ ] Chrome browser renders correctly
- [ ] Form inputs **don't zoom on focus** (16px font size check)
- [ ] Touch targets feel large enough
- [ ] Pricing numbers stay on one line
- [ ] Calculator sliders work smoothly
- [ ] No layout breaking at 360px (smallest test)

**Specific to test:**
- Tap into "Your Name" input → page should NOT zoom in
- If it zooms, font size is too small (needs to be 16px+)

---

#### Google Pixel 7/8 (412-432px)
**Why:** Tests larger Android viewport

- [ ] All layouts look spacious and professional
- [ ] No unexpected text wrapping
- [ ] Navigation feels responsive
- [ ] Form submission works in Chrome

**Quick Test:** Open site → scroll through entire page → submit form

---

## Browser-Specific Tests

### iOS Safari (iPhone)
- [ ] Scroll down → address bar hides, page doesn't jump
- [ ] Tap form input → keyboard opens without breaking layout
- [ ] Backdrop blur on navigation works
- [ ] Fixed elements (nav, floating CTA) stay in place while scrolling

### Android Chrome
- [ ] Viewport height handles address bar correctly
- [ ] Scrolling feels smooth
- [ ] Form inputs meet 16px minimum (no zoom)
- [ ] Touch feedback (ripple) doesn't interfere with buttons

---

## Critical User Flows

### Flow 1: Homepage → Calculator → Form Submission
**Time estimate:** 2 minutes
**Device:** iPhone SE

1. Load caliberinfrastructure.com
2. Scroll to "Calculate Your Loss" button in hero
3. Tap button → should scroll to calculator
4. Adjust "Weekly Missed Calls" slider to 25
5. Verify results update and numbers don't wrap
6. Tap "Book Your Free Revenue Audit"
7. Fill out form with test data
8. Submit → verify success message

**Pass Criteria:**
- [ ] Smooth scrolling
- [ ] All numbers visible without wrapping
- [ ] Form submits successfully
- [ ] Success message displays

---

### Flow 2: Mobile Menu → Section Navigation
**Time estimate:** 1 minute
**Device:** iPhone 14 Pro

1. Load homepage
2. Tap hamburger menu (top right)
3. Tap "Revenue Audit"
4. Menu should close, scroll to calculator
5. Open menu again
6. Tap "Infrastructure"
7. Should scroll to pricing section

**Pass Criteria:**
- [ ] Menu opens/closes smoothly
- [ ] Auto-scrolling works
- [ ] No layout breaking

---

### Flow 3: Pricing Exploration
**Time estimate:** 2 minutes
**Device:** iPad

1. Load homepage
2. Scroll to pricing section
3. Read Full Automation details
4. Tap dropdown arrow to show other tiers
5. Review Stabilization and Acceleration cards
6. Tap "Get Your Free Audit" on Full Automation

**Pass Criteria:**
- [ ] All text readable
- [ ] Numbers display properly
- [ ] Dropdown animation smooth
- [ ] CTA works

---

## Quick Visual Checks (All Devices)

### No Horizontal Scrolling ⚠️ CRITICAL
Slowly scroll through entire page vertically. At no point should you be able to scroll horizontally.

**Test at:**
- [ ] 320px (DevTools)
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 768px (iPad)

---

### Typography Hierarchy
All headings should be clearly distinguishable:

- [ ] H1 (hero): Largest, bold, attention-grabbing
- [ ] H2 (sections): Slightly smaller, clear hierarchy
- [ ] H3 (pricing): Readable, not cramped
- [ ] Body text: Comfortable to read on small screen

---

### Spacing Consistency
Visual spacing should feel consistent throughout:

- [ ] Section padding feels similar across page
- [ ] Card spacing looks intentional
- [ ] Button spacing is comfortable
- [ ] No cramped areas

---

### Touch Targets
All interactive elements should feel easy to tap:

- [ ] Navigation links (in mobile menu)
- [ ] All buttons
- [ ] Form inputs
- [ ] Dropdown selects
- [ ] Range sliders

**Minimum size:** 44x44px (iOS guideline)

---

## Performance Checks

### Page Load Speed
- [ ] Homepage loads in < 3 seconds on 4G
- [ ] No layout shift when loading
- [ ] Images (if any) load progressively
- [ ] No "white flash" on load

### Interaction Speed
- [ ] Buttons respond immediately to tap
- [ ] Scrolling is smooth (60fps)
- [ ] Menu animations are smooth
- [ ] Form validation is instant

### Network Conditions
Test on:
- [ ] 4G/LTE (normal)
- [ ] Slow 3G (to find issues)
- [ ] WiFi (best case)

**How to test:** Chrome DevTools → Network tab → Throttling

---

## Accessibility Quick Checks

### Color Contrast
- [ ] All text is readable on backgrounds
- [ ] Links are distinguishable from body text
- [ ] Disabled states are clearly different

### Form Usability
- [ ] All form labels are visible
- [ ] Required fields marked with *
- [ ] Error messages are clear
- [ ] Success states are obvious

### Navigation
- [ ] Tap targets are large enough (44x44px)
- [ ] Focus states are visible (for keyboard users)
- [ ] Skip links work (if implemented)

---

## Common Issues to Watch For

### iOS Safari
❌ **Issue:** Page zooms when typing in form
✅ **Fix:** Font size is now 16px+, should not zoom

❌ **Issue:** Fixed elements jump when scrolling
✅ **Fix:** Should be stable with current implementation

❌ **Issue:** Viewport height issues with address bar
✅ **Fix:** Should handle gracefully

### Android Chrome
❌ **Issue:** Form inputs trigger zoom
✅ **Fix:** 16px font size prevents this

❌ **Issue:** Touch targets feel too small
✅ **Fix:** All interactive elements are 44x44px minimum

### All Devices
❌ **Issue:** Numbers wrap awkwardly ($12,345 becomes $12, then 345)
✅ **Fix:** Using `whitespace-nowrap` on all number displays

❌ **Issue:** Horizontal scrolling appears
✅ **Fix:** Reduced padding and border radius on mobile

❌ **Issue:** Buttons too small to tap easily
✅ **Fix:** Minimum 44x44px tap targets

---

## Issue Reporting Template

If you find an issue, document it like this:

```
**Issue:** [Brief description]
**Device:** [e.g., iPhone SE]
**Browser:** [e.g., Safari 17]
**Viewport:** [e.g., 375px width]
**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Issue occurs]

**Expected:** [What should happen]
**Actual:** [What actually happens]
**Screenshot:** [Attach screenshot]
**Priority:** [High/Medium/Low]
```

---

## Sign-Off Checklist

Before launching to production, ALL of these must be checked:

### Functionality
- [ ] Mobile navigation works on all devices
- [ ] Calculator calculates correctly
- [ ] Form submits successfully
- [ ] All anchor links scroll properly
- [ ] Floating CTA appears/disappears correctly

### Visual Design
- [ ] No horizontal scrolling at any breakpoint
- [ ] All text is readable
- [ ] Spacing feels professional
- [ ] Touch targets are large enough
- [ ] Colors and contrast are good

### Performance
- [ ] Page loads in < 3 seconds on 4G
- [ ] No layout shift on load
- [ ] Smooth scrolling
- [ ] Fast interaction response

### Cross-Device
- [ ] Tested on iPhone SE (375px)
- [ ] Tested on iPhone 14 Pro (390px)
- [ ] Tested on iPad (768px+)
- [ ] Tested on Samsung Galaxy (360-412px)
- [ ] Tested on Google Pixel (412-432px)

### Cross-Browser
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Chrome Desktop (for desktop testing)
- [ ] Firefox Desktop (optional)

---

## Next Steps After Testing

### If Issues Found
1. Document using issue template above
2. Prioritize: High (breaks functionality) > Medium (UX issue) > Low (polish)
3. Fix high-priority issues immediately
4. Retest after fixes
5. Repeat until all critical issues resolved

### If No Issues Found
1. ✅ Mark site as mobile-ready
2. Deploy to production
3. Monitor analytics for mobile user behavior
4. Track form submission rate on mobile
5. Gather feedback from real med spa owners

---

## Testing Status

- [ ] **iPhone SE tested** - Date: _______ - Tester: _______
- [ ] **iPhone 14 Pro tested** - Date: _______ - Tester: _______
- [ ] **iPad tested** - Date: _______ - Tester: _______
- [ ] **Samsung Galaxy tested** - Date: _______ - Tester: _______
- [ ] **Google Pixel tested** - Date: _______ - Tester: _______

**All Critical Issues Resolved:** [ ] YES [ ] NO

**Ready for Production Deployment:** [ ] YES [ ] NO

**Approved By:** _________________ **Date:** _________

---

**Quick Start:** Test on your phone right now!
1. Open Safari/Chrome on your phone
2. Visit: caliberinfrastructure.com (or staging URL)
3. Go through the 3 critical user flows above
4. Check off items as you test
5. Document any issues you find

**Estimated Total Testing Time:** 30-45 minutes across all devices
