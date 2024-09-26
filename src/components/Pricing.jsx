import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const features = [
  "Engaging copy",
  "Website design",
  "Website Development",
  "Update in every 48H",
  "Revisions included",
  "Unlimited stock images & custom illustration",
  "Private communication channel for 24H support",
];

// Component for rendering feature list
const FeatureList = () => (
  <>
    {features.map((title, index) => (
      <div key={index} className="flex gap-[1rem] items-start justify-start">
        <div className="w-[1rem] h-[1rem] bg-[#41444B] bg-opacity-20 rounded-full text-[#41444B] text-[8px] p-[0.25rem] flex justify-center items-center">
          <FaCheck />
        </div>
        <h3 className="title-sub font-medium text-start">{title}</h3>
      </div>
    ))}
  </>
);

// Component for rendering pricing card
const PricingCard = ({ price, description, link, buttonText }) => (
  <div className="w-[100%] p-[1rem] rounded-[16px] outline outline-[6px] outline-[#C8CBD0] flex flex-col justify-center items-start gap-[0.5rem]">
    <h1 className="font-bold text-[28px] md:text-[32px]">
      {price}
      <span className="title-sub"> / month</span>
    </h1>
    <p className="title-sub text-start md:text-[14px]">{description}</p>
    <hr className="w-[100%] border-[1px] border-[#4b4141] mt-[0.5rem] mb-[0.75rem] opacity-50" />
    <FeatureList />
    <Link href={link} className="btn-primary w-[100%] mt-[3rem] bg-[#41444B] text-[#F5F7F8]">
      {buttonText}
    </Link>
  </div>
);

function Pricing() {
  return (
    <section className="flex flex-col gap-[1.5rem]">
      <h2 className="title-primary">Pricing</h2>
      <div className="flex flex-col sm:flex-row gap-[1.5rem] flex-grow">
        <PricingCard
          price="$199"
          description="Standalone project, ideally good for single & landing page design"
          link="/f"
          buttonText="Book a Call Now"
        />
        <PricingCard
          price="$499"
          description="Subscription-based, perfect for those who need multipage design"
          link="/f"
          buttonText="Book a Call Now"
        />
      </div>
      <div className="w-[100%] p-[1rem] rounded-[16px] outline outline-[6px] outline-[#C8CBD0] flex flex-col justify-center items-start gap-[0.5rem]">
        <div className="w-[100%]">
          <h1 className="text-[20px] md:text-[2rem] font-medium text-start mb-[0.75rem]">
            Couldn't find a perfect plan?
          </h1>
          <p className="title-sub text-start sm:pr-[2rem]">
            If your project doesn't fit the plans mentioned, or if you'd like to
            discuss before deciding, schedule a call with us. We promise to find
            a way to work together.
          </p>
        </div>
        <Link
          href="/f"
          className="btn-primary sm:w-[10rem] mt-[1rem] text-white bg-[#41444B]"
        >
          Let's Discuss
        </Link>
      </div>
    </section>
  );
}

export default Pricing;
