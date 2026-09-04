import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FLIGHT_MODE_PATHS, UAE_MANIFEST_CARGO_RULE } from '../data/flightModes.ts'
import LastVerified from './LastVerified.tsx'

export default function UaeCargoRuleCallout({
  extra,
}: {
  extra?: string
}) {
  return (
    <div className="mb-8 rounded-[20px] border border-[#E8D48B] bg-[#FFF8E7] p-6">
      <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-[#2A2A2A]">
        <AlertTriangle className="h-5 w-5 shrink-0 text-[#C89F5A]" />
        UAE import rule: manifest cargo
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-[#5A5A5A]">{UAE_MANIFEST_CARGO_RULE}</p>
      {extra ? <p className="mb-3 text-sm leading-relaxed text-[#5A5A5A]">{extra}</p> : null}
      <p className="text-sm leading-relaxed text-[#5A5A5A]">
        Compare every mode on the{' '}
        <Link to={FLIGHT_MODE_PATHS.hub} className="font-semibold text-[#4F5BD5] hover:underline">
          pet flight options hub
        </Link>
        , or go straight to{' '}
        <Link to={FLIGHT_MODE_PATHS.cargo} className="font-semibold text-[#4F5BD5] hover:underline">
          Emirates pet cargo / manifest cargo
        </Link>
        .
      </p>
      <LastVerified note="Confirm the current MOCCAE import conditions on the official portal before you book." />
    </div>
  )
}
