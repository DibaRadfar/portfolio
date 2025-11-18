import { useState } from 'react';


const mainSkills = [
  { name: "Tailwind CSS", img: "../../../public/img/Tailwindcss.png" ,desc:"تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز." },
  { name: "Sass", img: "../../../public/img/sass.png" ,desc:"" },
  { name: "JavaScript", img: "../../../public/img/js.png" ,desc:""},
  { name: "CSS", img: "../../../public/img/css.png" ,desc:""},
  { name: "HTML", img: "../../../public/img/html.png" ,desc:""},
  { name: "Redux", img: "../../../public/img/redux.png" ,desc:""},
  { name: "React", img: "../../../public/img/react.png" ,desc:""},
  { name: "TypeScript", img: "../../../public/img/typescript.png" ,desc:""},
  { name: "Bootstrap", img: "/images/bootstrap.png",desc:"" },
  { name: "Next.js", img: "/images/next.png" ,desc:""},
];


const moreSkills = [
  { name: "MySQL", img: "/images/mysql.png" ,desc:""},
  { name: "Laravel", img: "/images/laravel.png" ,desc:""},
  { name: "PHP", img: "/images/php.png" ,desc:""},
  { name: "Git", img: "/images/git.png" ,desc:""},
  { name: "Docker", img: "/images/docker.png" ,desc:""},
  { name: "Photoshop", img: "/images/photoshop.png" ,desc:""},
  { name: "Figma", img: "/images/figma.png" ,desc:""},
  { name: "Dokploy", img: "/images/dokploy.png" ,desc:""},
  { name: "Redis", img: "/images/redis.png" ,desc:""},
  { name: "Node.js", img: "/images/node.png" ,desc:""},
];




const SkillCard = ({ name, img, desc }) => (
  <div
    className="w-56 h-56 border border-[#FFFFFF59] rounded-xl bg-[#404040] 
               flex flex-col items-center justify-center p-8 gap-4
               transition-all duration-300 ease-out
               shadow-md hover:shadow-lg hover:shadow-orange-500/60
               hover:scale-105 hover:-translate-y-4
               cursor-pointer group"
  >
    <div className="w-20 h-20 overflow-hidden transition">
      <img src={img} alt={name} className="object-contain w-full h-full p-2" />
    </div>

    <span className="font-semibold text-center text-white">{name}</span>
    <p className='text-[#B4B4B4] text-[15px] w-[12.938rem] pt-[1.25rem] items-center'>{desc}</p>
  </div>
);



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

        {/* --- اصلی‌ها --- */}
        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
          {mainSkills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>

        {showAll && (
          <div className="grid w-full grid-cols-2 gap-8 duration-500 sm:grid-cols-3 md:grid-cols-5 justify-items-center animate-in fade-in">
            {moreSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} img={skill.img} />
            ))}
          </div>
        )}


        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-3 px-8 py-3 mx-auto mt-8 font-medium text-white transition-all duration-300 shadow-lg hover:bg-orange-500 rounded-xl hover:scale-105 active:scale-95"
        >
          {showAll ? "نمایش کمتر ↑" : "مشاهده همه مهارت‌ها ↓"}
        </button>

      </div>
    </div>
  );
};

export default Skills;
