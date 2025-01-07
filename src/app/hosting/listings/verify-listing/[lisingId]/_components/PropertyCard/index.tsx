import { Flex } from '@resido-fhm/ui-kit';
import Image, { type StaticImageData } from 'next/image';

interface Props {
  cardData: {
    imageUrl: StaticImageData | string;
    title: string;
    description: string;
  };
}

export const PropertyCard = ({ cardData }: Props) => {
  const { imageUrl, title, description } = cardData;

  return (
    <div className="flex w-full items-center gap-4 overflow-hidden rounded-xl border border-gray-light p-4 md:flex-col md:items-start md:gap-0 md:p-0">
      <Image
        className="size-12 rounded-lg object-cover md:size-auto md:max-h-35 md:w-full 2lg:max-h-60"
        src={imageUrl}
        alt={title}
      />
      <Flex direction="column" className="gap-1 md:p-4">
        <p className="text-base font-semibold text-neutral-blue">{title}</p>
        <p className="text-base text-gray-600 md:my-2">{description}</p>
      </Flex>
    </div>
  );
};
