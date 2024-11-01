import Gallery from "@/components/Gallery";
import Banner_image from "@/components/Banner_image";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import LatestNewsWidget from "@/components/LatestNewsWidget";
import UpcomingEventsWidget from "@/components/UpcomingEventsWidget";
import ImpactCommunity from "@/components/ImpactCommunity";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Banner */}
      <Gallery className="flex items-center justify-center p-6">
        <Banner_image />
      </Gallery>

      {/* Mission Statement */}
      <section className="py-10 px-6 text-black">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          We believe in fostering sustainable change in under-resourced
          communities. By providing educational resources, healthcare access,
          and economic support, we empower individuals to build a better future.
        </p>
      </section>

      {/* Featured Programs */}
      <section className="py-10 px-6 bg-gray-100 text-black">
        <FeaturedPrograms />
      </section>

      {/* Testimonials */}
      <section className="py-10 px-6 text-black">
        <h2 className="text-3xl font-semibold text-center mb-6">
          What People Are Saying
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Repeat for each testimonial */}
          <TestimonialSlider />
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-10 px-6 bg-gray-700 text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Get Involved
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-6">
          Your support makes our work possible. Whether you’re looking to
          donate, volunteer, or spread the word, there are many ways to make an
          impact.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/donate"
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
          >
            Donate
          </Link>
          <Link
            href="/programs"
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
          >
            Volunteer
          </Link>
        </div>
      </section>
      {/* Engagement Widgets Section */}
      <section className="py-16 px-6  bg-gray-100">
        <h2 className="text-3xl text-black font-semibold text-center mb-10">
          Stay Updated
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          <LatestNewsWidget />
          <UpcomingEventsWidget />
        </div>
      </section>
    </div>
  );
}
