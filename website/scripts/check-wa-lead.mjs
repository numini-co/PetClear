// WhatsApp lead composition invariants. Run from website/:
//   node --experimental-strip-types scripts/check-wa-lead.mjs
import {
  composeEligibilityLead,
  hasBlankPlaceholders,
  sanitizeLeadField,
  usefulClickedNote,
  waEligibility,
  WA_ELIGIBILITY_DEFAULT,
  WA_DIRECT_PROMPT,
} from '../src/lib/conversionCopy.ts'

const errors = []

function assert(cond, message) {
  if (!cond) errors.push(message)
}

const composed = composeEligibilityLead({
  name: 'Bushra',
  pet: 'Cat',
  origin: 'Lahore, Pakistan',
  destination: 'Dubai, UAE',
  date: 'October 2026',
  intent: 'Yes — ready to book a managed move',
  notes: 'Managed move from Lahore to Dubai',
  page: '/',
})

assert(!composed.includes('__'), 'composed lead must not contain __')
assert(!hasBlankPlaceholders(composed), 'composed lead must not have blank Origin/Pet/Date')
assert(composed.includes('Name: Bushra'), 'composed lead includes name')
assert(composed.includes('Origin: Lahore, Pakistan'), 'composed lead includes origin')
assert(composed.includes('Destination: Dubai, UAE'), 'composed lead includes destination')
assert(composed.includes('Target date: October 2026'), 'composed lead includes date')
assert(composed.includes('Page: /'), 'composed lead keeps page path')
assert(!composed.includes('Email:'), 'omit empty email')
assert(composeEligibilityLead({ page: '/contact/' }).includes('Page: /contact/'), 'contact path kept')

const skipped = composeEligibilityLead({
  name: 'Bushra',
  pet: '',
  origin: '__',
  destination: 'Dubai, UAE',
  notes: '   ',
})
assert(!skipped.includes('Origin:'), 'blank origin omitted')
assert(!skipped.includes('Pet:'), 'blank pet omitted')
assert(!skipped.includes('Notes:'), 'blank notes omitted')
assert(skipped.includes('Destination: Dubai, UAE'), 'filled destination kept')

assert(sanitizeLeadField('__') === undefined, 'sanitize drops __')
assert(sanitizeLeadField('dog (breed __)') === 'dog (breed)', 'sanitize strips leftover __ tokens')

const oldDefault =
  'I want a paid Dubai pet relocation eligibility check. Origin: __. Pet: __. Target date: __. Need: managed move / document plan / other.'
assert(hasBlankPlaceholders(oldDefault), 'old default is detected as blank template')
assert(usefulClickedNote(oldDefault) === undefined, 'old default ignored as page note')
assert(!WA_ELIGIBILITY_DEFAULT.includes('__'), 'default CTA has no __')
assert(!WA_DIRECT_PROMPT.includes('__'), 'direct prompt has no __')
assert(!hasBlankPlaceholders(WA_ELIGIBILITY_DEFAULT), 'default CTA has no blank field labels')

const fallback = waEligibility()
assert(!fallback.includes('__'), 'empty waEligibility has no __')
assert(waEligibility({ origin: 'India', need: 'managed move' }).includes('Origin: India'), 'waEligibility keeps filled origin')
assert(!waEligibility({ pet: '__', need: 'managed move' }).includes('Pet:'), 'waEligibility drops blank pet')

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2))
  process.exit(1)
}
console.log(JSON.stringify({ ok: true, composed }, null, 2))
