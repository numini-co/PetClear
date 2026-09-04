interface SnippetAnswerProps {
  question: string
  answer: string
}

/** 40–60 word featured-snippet lead. Keep FAQPage answers in sync when the same question is reused. */
export default function SnippetAnswer({ question, answer }: SnippetAnswerProps) {
  return (
    <div className="mb-8 rounded-[20px] border border-[#C8CEE8] bg-[#F5F6FD] p-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">Direct answer</p>
      <h2 className="mb-3 text-xl font-bold text-[#2A2A2A] sm:text-2xl">{question}</h2>
      <p className="text-base leading-relaxed text-[#5A5A5A]">{answer}</p>
    </div>
  )
}
