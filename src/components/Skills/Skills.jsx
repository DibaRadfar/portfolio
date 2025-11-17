import { useState } from 'react'; 

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="Skills bg-[#404040] w-full py-12 px-6">
      <h1 className="text-[#FFFFFF] text-[38px] text-center font-bold mb-4">
        مهارت‌ها و توانایی‌ها
      </h1>
      <p className="text-[22px] text-[#B4B4B4] text-center mb-12">
        فناوری‌ها و تکنولوژی‌های مسلط و در حال یادگیری
      </p>

      <div className="flex flex-col items-center gap-10 mx-auto max-w-7xl">

        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
          <SkillCard name="Tailwind CSS" />
          <SkillCard name="Sass" />
          <SkillCard name="JavaScript" />
          <SkillCard name="CSS" />
          <SkillCard name="HTML" />
          <SkillCard name="Redux" />
          <SkillCard name="React" />
          <SkillCard name="TypeScript" />
          <SkillCard name="Bootstrap" />
          <SkillCard name="Next.js" />
        </div>


        {showAll && (
          <div className="grid w-full grid-cols-2 gap-8 duration-500 sm:grid-cols-3 md:grid-cols-5 justify-items-center animate-in fade-in">
            <SkillCard name="MySQL" />
            <SkillCard name="Laravel" />
            <SkillCard name="PHP" />
            <SkillCard name="Git" />
            <SkillCard name="Docker" />
            <SkillCard name="Photoshop" />
            <SkillCard name="Figma" />
            <SkillCard name="Dokploy" />
            <SkillCard name="Redis" />
            <SkillCard name="Node.js" />
          </div>
        )}


        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-3 px-8 py-3 mx-auto mt-8 font-medium text-white transition-all duration-300 shadow-lg hover:bg-orange-500 rounded-xl hover:scale-105 active:scale-95"
        >
          {showAll ? (
            <>نمایش کمتر ↑</>
          ) : (
            <>مشاهده همه مهارت‌ها ↓</>
          )}
        </button>
      </div>
    </div>
  );
};


const SkillCard = ({ name }) => (
  <div
    className="w-56 h-56 border border-[#FFFFFF59] rounded-xl bg-[#404040] 
               flex flex-col items-center justify-center p-8 gap-4
               transition-all duration-300 ease-out
               shadow-md hover:shadow-lg hover:shadow-orange-500/60
               hover:scale-105 hover:-translate-y-4
               cursor-pointer group"
  >
    <div className="w-20 h-20 transition bg-gray-700 rounded-xl group-hover:bg-orange-500/30"></div>
    <span className="font-semibold text-center text-white">{name}</span>
  </div>
);

export default Skills;