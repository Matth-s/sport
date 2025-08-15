import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React from 'react';

type ShowPasswordButtonProps = {
  text: string;
  showPassword: boolean;
  setShowPassword: () => void;
};

const ShowPasswordButton = ({
  text,
  setShowPassword,
  showPassword,
}: ShowPasswordButtonProps) => {
  return (
    <div className="flex gap-x-3 items-center">
      <Checkbox
        className="cursor-pointer"
        id="show-password"
        onCheckedChange={setShowPassword}
        defaultChecked={showPassword}
      />

      <Label htmlFor="show-password" className="cursor-pointer">
        {text}
      </Label>
    </div>
  );
};

export default ShowPasswordButton;
