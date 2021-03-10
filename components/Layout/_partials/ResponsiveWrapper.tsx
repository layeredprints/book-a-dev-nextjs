import { ReactNode } from 'react';

const ResponsiveWrapper = ({
  children,
}: {
  children: ReactNode,
}) => (
  <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto my-0">
    {children}
  </div>
);

export default ResponsiveWrapper;
