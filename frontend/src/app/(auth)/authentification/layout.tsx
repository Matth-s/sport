import React from 'react';

type AuthentificationLayoutProps = {
  children: React.ReactNode;
};

const AuthentificationLayout = ({
  children,
}: AuthentificationLayoutProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      {children}
    </div>
  );
};

export default AuthentificationLayout;
