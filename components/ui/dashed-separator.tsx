import React from "react";

const DashedSeparator = () => {
  return (
    <div className="flex justify-between items-center my-6 gap-1">
      {Array.from({ length: 40 }, (_, i) => (
        <div key={i} className="h-[1px] w-3 bg-orange-900 rounded-full" />
      ))}
    </div>
  );
};

export default DashedSeparator;
