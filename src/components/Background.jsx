export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-[#020617]"></div>

      {/* Glow 1 */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl 
        top-1/4 left-1/3"></div>

      {/* Glow 2 */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl 
        bottom-1/4 right-1/4"></div>

      {/* Optional Grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]"
      ></div>

    </div>
  );
}