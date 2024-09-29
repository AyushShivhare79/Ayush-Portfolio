import CustomCard from "./ProjectCard";

export default function () {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center text-5xl">
        <h1 className="py-10">My Projects</h1>
        <div className="grid grid-cols-2 gap-5">
          <CustomCard
            title="Cxchain"
            description="Okay"
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Blogging"
            description="Okay"
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Portfolio"
            description="Okay"
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Venmo"
            description="Okay"
            image={"asdf"}
            trynow="#"
            github="#"
          />
        </div>
      </div>
    </>
  );
}
