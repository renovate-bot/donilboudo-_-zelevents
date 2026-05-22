type IconProps = { className?: string };

export function WeddingIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="6" r="3" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="16" cy="6" r="3" stroke="#C9A84C" strokeWidth="1.5" />
      <path
        d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 10v4M10 12h4" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BirthdayIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="10" width="14" height="10" rx="1" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M12 10V6M9 6h6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8 6c0-1.1.9-2 2-2s2 .9 2 2M14 6c0-1.1.9-2 2-2s2 .9 2 2"
        stroke="#E8C97A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="15" r="1" fill="#C9A84C" />
      <circle cx="12" cy="17" r="1" fill="#E8C97A" />
      <circle cx="15" cy="15" r="1" fill="#C9A84C" />
    </svg>
  );
}

export function CorporateIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="8" width="16" height="12" rx="1" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M8 8V5h8v3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 13h16" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="10" y="15" width="4" height="5" stroke="#E8C97A" strokeWidth="1.5" />
    </svg>
  );
}

export function BabyIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="#C9A84C" strokeWidth="1.5" />
      <path
        d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 14c1.5-1 2.5-1 4-1s2.5 0 4 1"
        stroke="#E8C97A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PrivateIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="12" width="12" height="8" rx="1" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="8" y="9" width="8" height="3" rx="0.5" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="10" y="6" width="4" height="3" rx="0.5" stroke="#E8C97A" strokeWidth="1.5" />
      <path d="M12 6V4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1" fill="#E8C97A" />
    </svg>
  );
}

export function DecorationIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="2.5" stroke="#E8C97A" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="2" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M8 13v6M16 10.5v5M14 16v3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CateringIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 10h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v6M9 4c0 2 1 3 3 3s3-1 3-3"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="2" stroke="#E8C97A" strokeWidth="1.5" />
    </svg>
  );
}

export function EntertainmentIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 14v-2a2 2 0 012-2h1l2-4h6l2 4h1a2 2 0 012 2v2"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="3" y="14" width="18" height="4" rx="1" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="8" cy="18" r="1" fill="#E8C97A" />
      <circle cx="16" cy="18" r="1" fill="#E8C97A" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L17 11l4 1.5v3c0 .6-.4 1-1 1C10.6 16.5 7.5 13.4 6.5 6c0-.6.4-1 1-1z"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-6-5.1-6-10a6 6 0 1112 0c0 4.9-6 10-6 10z"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="#E8C97A" strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon({ className = "w-3 h-3" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="#C9A84C" aria-hidden>
      <path d="M6 0L7.35 4.15L12 4.5L8.7 7.35L9.7 12L6 9.6L2.3 12L3.3 7.35L0 4.5L4.65 4.15L6 0Z" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-3.5 h-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6L7 0Z"
        fill="#C9A84C"
      />
    </svg>
  );
}

const serviceIconMap = {
  wedding: WeddingIcon,
  birthday: BirthdayIcon,
  corporate: CorporateIcon,
  baby: BabyIcon,
  private: PrivateIcon,
  decoration: DecorationIcon,
  catering: CateringIcon,
  entertainment: EntertainmentIcon,
} as const;

export type ServiceIconName = keyof typeof serviceIconMap;

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = serviceIconMap[name];
  return <Icon className={className} />;
}
