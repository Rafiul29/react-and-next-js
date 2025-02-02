
const Panel = ({ title, children ,isActive,onShow }) => {


  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl">{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="self-start" onClick={onShow}>
          Show
        </button>
      )}
    </div>
  );
};

export default Panel;
