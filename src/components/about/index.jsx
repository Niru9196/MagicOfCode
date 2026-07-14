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
                        Hi, I'm Nirupama 👋

                        I enjoy building software that people actually use. Over the past 2+ years, I've worked on web applications, learned to think beyond just writing code, and developed an appreciation for building products that balance user needs with technical decisions.
                        
                        I'm curious by nature, so you'll often find me exploring new technologies, breaking things to understand how they work, and then putting them back together (hopefully better than before). My goal is to become the kind of engineer who can own a feature from idea to production and build products that are simple, scalable, and enjoyable to use.
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
