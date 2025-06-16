import type { FC } from 'react';

interface SubtitleSectionProps {
  title: string;
}

const SubtitleSection: FC<SubtitleSectionProps> = ({ title }) => {
  return (
    <h2 className="mb-[80px] text-center font-family-primary text-h3 uppercase">
      {title}
    </h2>
  );
};

export { SubtitleSection };
