import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <>
            <Image
                src={bg}
                alt="Next.js Portfolio website's contact page background image"
                priority
                sizes="100vw"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
            />

            <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
                    <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Scribe Your Message, and Let the Winds Deliver It
                    </h1>
                    <p className="text-center font-light text-sm xs:text-base">
                        Whether you&rsquo;re here to collaborate, ask questions,
                        or just say hey, this is the place to make your words
                        travel across realms (or, you know, the internet).
                        I&rsquo;m a sorcerer in training, learning one
                        enchantment at a time&mdash;so your scroll won&rsquo;t
                        vanish into the void. Send your thoughts through the
                        form below, and I&rsquo;ll answer when the stars align
                        (or when I&rsquo;m not deep in code).
                    </p>
                </div>
                <Form />
            </article>
        </>
    );
}
