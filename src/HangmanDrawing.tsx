
const HEAD = (
  <div className="w-[50px] h-[50px]"/>
)



const HangmanDrawing = () => {
  return (
    <div className="relative">
      <div className="absolute h-[50px] w-[10px] bg-black top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px] " />
      <div className="h-[400px] w-[10px] bg-black ml-[120px] " />
      <div className=" h-[10px] w-[250px] bg-black" />
    </div>
  );
};
export default HangmanDrawing;
