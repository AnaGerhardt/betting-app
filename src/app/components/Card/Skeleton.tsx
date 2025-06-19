const CardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white rounded-md w-full h-[300px] mr-12 p-2 gap-2">
      <div className="bg-gray-100 h-8 w-40"></div>
      <div className="bg-gray-100 h-full w-full"></div>
    </div>
  );
};

export default CardSkeleton;
