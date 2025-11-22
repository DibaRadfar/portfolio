import { useState } from "react";

const mainSkills = [
  {
    name: "Tailwind CSS",
    img: "../../../public/img/Tailwind.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز.",
  },
  {
    name: "Sass",
    img: "../../../public/img/sass.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز.",
  },
  { name: "JavaScript", 
    img: "../../../public/img/javascript.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "CSS",
    img: "../../../public/img/css.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "HTML",
    img: "../../../public/img/html.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "Redux",
    img: "../../../public/img/redux.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "React",
    img: "../../../public/img/react.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "TypeScript",
    img: "../../../public/img/typescript.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "Bootstrap",
    img: "../../../public/img/bootstrap.png",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Next.js",
    img: "../../../public/img/nextjs.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
];

const moreSkills = [
  { name: "MySQL",
    img: "../../../public/img/mysql.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Laravel",
    img: "../../../public/img/laravel.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "PHP",
    img: "../../../public/img/php.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "Git",
    img: "../../../public/img/git.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Docker",
    img: "../../../public/img/docker.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
   },
  { name: "Photoshop",
    img: "../../../public/img/photoshop.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Figma",
    img: "../../../public/img/figma.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Dokploy",
    img: "../../../public/img/dokploy.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Redis",
    img: "../../../public/img/redis.svg",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز."
  },
  { name: "Node.js",
    img: "../../../public/img/nodejs.png",
    desc: "تسلط بر Tailwind CSS برای طراحی سریع، واکنش‌گرا و ماژولار رابط‌های کاربری با کدنویسی بهینه و ساختار تمیز." },
];

const SkillCard = ({ name, img, desc }) => {
  return (
    <div
      className="w-75 h-auto min-h-80 border border-[#FFFFFF59] rounded-xl bg-[#4D4D4D33] 
                 flex flex-col items-center justify-start pt-8 pb-6 px-6 gap-5
                 transition-all duration-300 ease-out
                 shadow-md hover:shadow-lg hover:shadow-orange-500/60
                 hover:scale-105 hover:-translate-y-4
                 cursor-pointer group"
    >

      <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
        <img src={img} alt={name} className="object-contain w-full h-full" />
      </div>


      <h3 className="text-xl font-bold text-center text-white">{name}</h3>


      <p className="text-[#B4B4B4] text-[15px] leading-relaxed text-center">
        {desc}
      </p>
    </div>
  );
};

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
          {mainSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              img={skill.img}
              desc={skill.desc}
            />
          ))}
        </div>

        {showAll && (
          <div className="grid w-full grid-cols-2 gap-8 duration-500 sm:grid-cols-3 md:grid-cols-5 justify-items-center animate-in fade-in">
            {moreSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                img={skill.img}
                desc={skill.desc}
              />
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
