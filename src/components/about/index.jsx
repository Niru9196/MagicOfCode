import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                        Mage of Modern Software Engineering
                    </h2>
                    <p className="font-light  text-xs sm:text-sm md:text-base   ">
                        Software Engineer with 1 year of experience in the
                        fintech domain and some internship experience. Skilled
                        in software development with a background in the
                        frontend, Javascript, Data Structure and Algorithm and
                        CPP. My proficiency extends to modern technologies and
                        best practices with a strong focus on building
                        high-performance applications. Dedicated to coding
                        excellence and eager to contribute to innovative,
                        cutting-edge projects. Seeking opportunities to leverage
                        my learning and work towards becoming a Subject Matter
                        Expert in development.
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={
                        " col-span-full xs:col-span-6 lg:col-span-4 text-accent"
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        4{" "}
                        <sub className="font-semibold text-base">
                            Collaborative Quests in Tech
                        </sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={
                        "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        1+{" "}
                        <sub className="font-semibold text-base">
                            years of experience
                        </sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,html,js,mongodb,netlify,nextjs,nodejs,react,redux,sass,tailwind,threejs,vercel,vite,vscode,ts,cpp,jest,materialui,styledcomponents`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full xs:col-span-6 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        Mail:{" "}
                        <sub className="font-semibold text-base">
                            singhnirupama9651@gmail.com
                        </sub>
                    </p>
                </ItemLayout>
                <ItemLayout
                    className={"col-span-full xs:col-span-6 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        Contact:{" "}
                        <sub className="font-semibold text-base">
                            7905049280
                        </sub>
                    </p>
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutDetails;
