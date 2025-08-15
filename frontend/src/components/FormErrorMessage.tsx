import React from 'react';

type FormErrorMessageProps = {
  message?: string;
};

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  if (!message) return null;

  return (
    <div className="rounded-lg border border-pink-300 bg-pink-100 px-4 py-2 text-center text-sm font-semibold text-pink-700 shadow-md">
      {message}
    </div>
  );
};

export default FormErrorMessage;
