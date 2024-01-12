import { PlusIcon } from '@/assets/icons/Plus';
import * as Primitive from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

export const Trigger = ({ children, className, ...rest }: Primitive.AccordionTriggerProps) => {
  return (
    <Primitive.Trigger
      className={twMerge(
        'w-full flex justify-between items-center hover:opacity-70 duration-200 p-6',
        className,
      )}
      {...rest}
    >
      {children}
      <PlusIcon />
    </Primitive.Trigger>
  );
};
