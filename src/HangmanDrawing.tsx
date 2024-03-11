const HEAD = (
  <div className="w-[60px] h-[60px] rounded-full border-[10px] border-solid border-black absolute top-[50px] right-[-25px]" />
);

const BODY = (
  <div className="w-[10px] h-[100px] rounded-full border-[6px] border-solid border-black absolute top-[105px] right-[0]" />
);

const RIGHT_ARM = (
  <div className="w-[100px] h-[9px] rounded-full border-[6px] border-solid border-black absolute top-[140px] right-[-85px] rotate-[-30deg]" />
);

const LEFT_ARM = (
  <div className="w-[100px] h-[9px] rounded-full border-[6px] border-solid border-black absolute top-[140px] right-[-2px] rotate-[30deg]" />
);

const RIGHT_LEG = (
  <div className="w-[100px] h-[9px] rounded-full border-[6px] border-solid border-black absolute top-[237px] left-[288px] right-[-90px] rotate-[60deg]" />
);

const LEFT_LEG = (
  <div className="w-[100px] h-[9px] rounded-full border-[6px] border-solid border-black absolute top-[237px] left-[242px] right-[0px] rotate-[-60deg]" />
);

const HangmanDrawing = () => {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="absolute h-[50px] w-[10px] bg-black top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px] " />
      <div className="h-[400px] w-[10px] bg-black ml-[120px] " />
      <div className=" h-[10px] w-[250px] bg-black" />
    </div>
  );
};
export default HangmanDrawing;
