import React from "react";

export default function Team() {
  const team = [
    {
      src: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "John Smith",
      position: "Deginestion",
      description:
        " Lorem ipsum dolor sit amet consectetur. In justo rutrum sit s fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leosociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      src: "https://images.unsplash.com/photo-1630939687530-241d630735df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
      name: "Jan lotus",
      position: "Deginestion",
      description:
        " Lorem ipsum dolor sit amet consectetur. In justo rutrum sit s fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leosociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      src: "https://images.unsplash.com/photo-1508673778687-0b1ffaac41c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "katy Smith",
      position: "Deginestion",
      description:
        " Lorem ipsum dolor sit amet consectetur. In justo rutrum sit s fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leosociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <>
      <div className="w-full h-fit pb-4 mt-4 rounded-md bg-white ">
        <div className="container flex flex-col mx-auto">
          <h1 className="text-black font-inter text-start pl-4 pt-2 text-lg font-bold ">
            {" "}
            Teams
          </h1>
          <p className=" px-4 py-2 font-inter text-gray-800 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quidem dolor ipsum aperiam eveniet fugit! Eos quas similique
            voluptatum autem at. Qui ipsum ad doloremque accusamus.
          </p>
          <div className="cards flex flex-col gap-y-2">
            {team.map((t, index) => (
              <div className="card bg-[#e8f4fd] p-4  mx-3  rounded-md flex items-center flex-col md:flex-row">
                <div>
                  <div
                    className="h-20  bg-center bg-cover w-16 rounded-lg "
                    style={{
                      backgroundImage: `url(${t.src})`,
                    }}
                  ></div>
                  <h1 className=" font-semibold text-xs">{t.name}</h1>
                  <p className=" text-gray-500 text-xs">{t.position}</p>
                </div>
                <p className=" px-1  md:px-4 py-2 font-inter text-gray-800 text-xs">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
