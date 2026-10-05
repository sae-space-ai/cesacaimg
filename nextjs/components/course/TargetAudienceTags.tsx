interface TargetAudienceTagsProps {
  audience: string[];
}

export function TargetAudienceTags({ audience }: TargetAudienceTagsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-cesac-900 mb-3">Destinatarios</h2>
      <div className="flex flex-wrap gap-2">
        {audience.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-cesac-50 text-cesac-700 text-sm rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
