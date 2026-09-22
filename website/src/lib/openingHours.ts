/**
 * Published opening hours. Single source for the contact page, footer,
 * llms.txt contact line, and schema.org openingHoursSpecification.
 *
 * The contact page body is the complete pair already in the product:
 * Sunday–Thursday 9:00 AM–6:00 PM GST, Friday–Saturday limited / by appointment.
 * The older footer and schema used a daily 9:00 AM–8:00 PM clock. That clock
 * is not used here.
 *
 * Friday and Saturday have no opens/closes in the contact source, so the
 * structured specification records the same limited label and does not invent
 * a weekend clock.
 *
 * Keep website/public/llms.txt hours in step with HOURS_SUMMARY.
 */

export const HOURS_WEEKDAY_DAYS = 'Sunday – Thursday'
export const HOURS_WEEKDAY_TIME = '9:00 AM – 6:00 PM GST'
export const HOURS_WEEKEND_DAYS = 'Friday – Saturday'
export const HOURS_WEEKEND_TIME = 'Limited / By Appointment'

export const HOURS_SUMMARY = `${HOURS_WEEKDAY_DAYS}, ${HOURS_WEEKDAY_TIME}. ${HOURS_WEEKEND_DAYS}, ${HOURS_WEEKEND_TIME}.`

const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] as const
const WEEKEND = ['Friday', 'Saturday'] as const

export const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [...WEEKDAY],
    opens: '09:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [...WEEKEND],
    description: HOURS_WEEKEND_TIME,
  },
]
