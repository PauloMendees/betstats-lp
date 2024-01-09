import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useButton } from './hooks/useButton';
import { twMerge } from 'tailwind-merge';

export type ButtonScheme = 'gradient' | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  scheme?: ButtonScheme;
  children: ReactNode;
};

export const Button = ({ scheme = 'gradient', children, disabled, className, ...rest }: Props) => {
  const { getSchemeClassname } = useButton();

  return (
    <button
      {...rest}
      className={twMerge(
        'flex gap-[10px] items-center rounded-md font-semibold px-6 py-4 hover:opacity-70 duration-200',
        getSchemeClassname(scheme),
        disabled ? 'opacity-60 cursor-default' : '',
        className,
      )}
    >
      {children}
    </button>
  );
};
