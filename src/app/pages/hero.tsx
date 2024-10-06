export default function Hero() {
  return (
    <section className=" w-dvw h-dvh flex items-center justify-center flex-col gap-5">
        <h1 className=" text-6xl font-bold ">Discover the Future</h1>
        <input type="text" name="Name" id="" placeholder="Enter your Name" className=" max-w-sm w-full bg-white text-black  rounded-md px-3 py-2"/>
        <button className=" border-white px-10 py-3 rounded-md bg-red-700">Play Now</button>
    </section>
  )
}
