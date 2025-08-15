import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type SubmitButtonProps = {
  text: string;
  className?: string;
  isDisabled: boolean;
};

const SubmitButton = ({
  text,
  className,
  isDisabled,
}: SubmitButtonProps) => {
  return (
    <Button
      className={cn('cursor-pointer', className)}
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
