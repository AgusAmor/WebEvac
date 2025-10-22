import { BannerIndex } from "../components/BannerIndex.jsx";
import { Carousel, Card } from "flowbite-react";

export function HomePage() {
  return (
    <>
      <main>
        <BannerIndex />
        <section className="my-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Servicios
          </h2>
          <div className="h-56 md:h-64 xl:h-80 2xl:h-96">
            <Carousel pauseOnHover>
              <Card
                className="max-w-sm rounded-lg"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://placehold.co/600x400"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://placehold.co/600x400"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://placehold.co/600x400"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://placehold.co/600x400"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}
